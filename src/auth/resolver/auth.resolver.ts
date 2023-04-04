import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { UserEntity } from 'src/users/entities/users.entity';
import { LoginUserInput } from '../dto/LoginUser.input';
import { ResponseLogin } from '../dto/ResponseLogin.dto';

@Resolver()
export class AuthResolver {
    constructor(private readonly authServices: AuthService) { }

    @Mutation((returns) => ResponseLogin )
    async Login(@Args('LoginUser') LoginUser: LoginUserInput) {
        const user = await this.authServices.ValidateUser(LoginUser);
        return await this.authServices.generateJWT(user)
    }
}
