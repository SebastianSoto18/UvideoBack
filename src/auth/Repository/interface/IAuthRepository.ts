import { LoginUserInput } from "src/auth/dto/LoginUser.input";
import { ResponseLogin } from "src/auth/dto/ResponseLogin.dto";
import { UserEntity } from "src/users/entities/users.entity";

export const AUTH_REPOSITORY = 'AuthRepository';

export interface AuthRepository {
    ValidateUser(user: LoginUserInput): Promise<UserEntity>;
    generateJWT(user: UserEntity): Promise<ResponseLogin>;
}