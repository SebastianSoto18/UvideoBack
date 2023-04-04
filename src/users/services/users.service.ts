import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/users.entity';
import { USER_REPOSITORY } from '../Repository/interfaces/IUserRepository';
import { CreateUserInput } from '../dto/CreateUser.input';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

const configService = new ConfigService();


@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository){}
    findAll(): UserEntity[] {
        return this.userRepository.FindAll();
    }

    CreateUser(user:CreateUserInput): Promise<UserEntity>{
        user.password = bcrypt.hashSync(user.password, +configService.get('SALT'));
        return this.userRepository.CreateUser(user);
    }

    FindUserByEmail(email: string): Promise<UserEntity>{
        return this.userRepository.FindUserByEmail(email)
    }

    async FindUserById(id: string): Promise<UserEntity>{
        return await this.userRepository.FindUserById(id);
    }
}
