import { Global, Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthResolver } from './resolver/auth.resolver';
import { AUTH_REPOSITORY } from './Repository/interface/IAuthRepository';
import { MongoAuthRepository } from './Repository/MongoAuthRepository';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/services/users.service';



@Global()
@Module({
  imports: [UsersModule],
  providers: [AuthService, AuthResolver,{
    provide: AUTH_REPOSITORY,
    useClass: MongoAuthRepository,
  },UsersService]
})
export class AuthModule {}
