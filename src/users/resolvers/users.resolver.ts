import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { UserEntity } from '../entities/users.entity';
import { CreateUserInput } from '../dto/CreateUser.input';

@Resolver()
export class UsersResolver {
    constructor(private readonly userServices: UsersService){}
    
    @Query((returns) => [UserEntity])
    users(){
        return this.userServices.findAll();
    }

    @Mutation((returns) => UserEntity)
    CreateUser(@Args('user') user: CreateUserInput){
        return this.userServices.CreateUser(user);
    }
}
