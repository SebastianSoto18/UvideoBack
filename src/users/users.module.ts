import { Global, Module } from '@nestjs/common';
import { UsersResolver } from './resolvers/users.resolver';
import { UsersService } from './services/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity } from './entities/users.entity';
import { UserSchema } from './schemas/users.shemas';
import { USER_REPOSITORY } from './Repository/interfaces/IUserRepository';
import { MongoUserRepository } from './Repository/MongoUserRepository';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }])],
  providers: [UsersResolver, UsersService,{
    provide: USER_REPOSITORY,
    useClass: MongoUserRepository,
  }],
  exports: [{
    provide: USER_REPOSITORY,
    useClass: MongoUserRepository,
  }]
})
export class UsersModule {}
