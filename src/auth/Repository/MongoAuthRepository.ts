import { UserEntity } from "src/users/entities/users.entity";
import { LoginUserInput } from "../dto/LoginUser.input";
import { AuthRepository } from "./interface/IAuthRepository";
import { UsersService } from "src/users/services/users.service";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ResponseLogin } from "../dto/ResponseLogin.dto";

const configService = new ConfigService()


@Injectable()
export class MongoAuthRepository implements AuthRepository{
    constructor(private readonly userServices: UsersService){}
    
    async ValidateUser(loginUser: LoginUserInput): Promise<UserEntity> {
        const user = await this.userServices.FindUserByEmail(loginUser.email);
        if(!user){
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(loginUser.password, user.password);
        if(!isPasswordValid){         
            throw new Error('Password or email are not valid');
        }
        return user;
    }
    
    async generateJWT(user: UserEntity): Promise<ResponseLogin> {
        const payload = {
            role: user.role,
            sub: user._id,
            email: user.email,
        };
        return {
            access_token: this.signJWT({payload,secret:configService.get('JWT_SECRET'),expires:'1h'}),
            user,
        }
    }

    public signJWT({payload,secret,expires}:{payload:jwt.JwtPayload; secret:string; expires:number | string;}){
        return jwt.sign(payload,secret,{expiresIn:expires});
    }
}