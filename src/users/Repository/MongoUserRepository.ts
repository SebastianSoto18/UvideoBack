import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "../dto/CreateUser.input";
import { UserEntity } from "../entities/users.entity";
import { UserRepository } from "./interfaces/IUserRepository";
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument, UserModel } from "../schemas/users.shemas";
import { Types } from "mongoose";



@Injectable()
export class MongoUserRepository implements UserRepository{
    constructor(@InjectModel(UserEntity.name) private readonly userModel: UserModel){}
    async CreateUser(user: CreateUserInput): Promise<UserEntity> {
        user._id = new Types.ObjectId();
        const newUser = await new this.userModel(user).save();
        return newUser;
    }
    async FindAll(): Promise<UserEntity[]> {
        return await this.userModel.find().exec();
    }    

    async FindUserByEmail(email: string): Promise<UserEntity> {
        return await this.userModel.findOne({email: email}).exec();
    }

    async FindUserById(id: string): Promise<UserEntity> {
        return await this.userModel.findById(id).exec(); 
    }
}