import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "../dto/CreateUser.input";
import { UserEntity } from "../entities/users.entity";
import { UserRepository } from "./interfaces/IUserRepository";
import { InjectModel } from "@nestjs/mongoose";
import { UserModel } from "../schemas/users.shemas";


@Injectable()
export class MongoUserRepository implements UserRepository{
    constructor(@InjectModel(UserEntity.name) private readonly userModel: UserModel){}
    async CreateUser(user: CreateUserInput): Promise<UserEntity> {
        const newUser = await this.userModel.create(user);
        return newUser;
    }

    async FindAll(): Promise<UserEntity[]> {
        return await this.userModel.find().exec();
    }    

    async FindUserByEmail(email: string): Promise<UserEntity> {
        return await this.userModel.findOne({email: email}).exec();
    }
}