import { Field, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "src/users/entities/users.entity";

@ObjectType()
export class ResponseLogin {
    @Field()
    access_token: string;
    @Field((type) => UserEntity)
    user: UserEntity;
}