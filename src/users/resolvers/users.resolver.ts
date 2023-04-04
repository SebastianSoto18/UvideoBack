import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { UserEntity } from '../entities/users.entity';
import { CreateUserInput } from '../dto/CreateUser.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { PublicAccess } from 'src/auth/decorators/public.decorator';

@Resolver()
@UseGuards(AuthGuard)
export class UsersResolver {
    constructor(private readonly userServices: UsersService){}
    
    @PublicAccess()
    @Query((returns) => [UserEntity])
    users(){
        return this.userServices.findAll();
    }
    
    @Mutation((returns) => UserEntity)
    CreateUser(@Args('user') user: CreateUserInput){
        return this.userServices.CreateUser(user);
    }
}
