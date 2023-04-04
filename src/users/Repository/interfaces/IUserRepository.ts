import { CreateUserInput } from "../../dto/CreateUser.input";
import { UserEntity } from "../../entities/users.entity";

export const  USER_REPOSITORY = 'UserRepository';

export interface UserRepository {
    CreateUser(user: CreateUserInput): Promise<UserEntity>;
    FindAll(): Promise<UserEntity[]>;
    FindUserByEmail(email: string): Promise<UserEntity>;
    FindUserById(id: string): Promise<UserEntity>;
}