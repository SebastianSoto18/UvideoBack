import { Inject, Injectable } from '@nestjs/common';
import { AUTH_REPOSITORY } from '../Repository/interface/IAuthRepository';
import { LoginUserInput } from '../dto/LoginUser.input';
import { UserEntity } from 'src/users/entities/users.entity';
import { ResponseLogin } from '../dto/ResponseLogin.dto';

@Injectable()
export class AuthService {
    constructor(@Inject(AUTH_REPOSITORY) private readonly authRepository) { }

    ValidateUser(loginUser: LoginUserInput): Promise<UserEntity> {
        return this.authRepository.ValidateUser(loginUser);
    }

    generateJWT(user: UserEntity): Promise<ResponseLogin> {
        return this.authRepository.generateJWT(user);
    }
}
