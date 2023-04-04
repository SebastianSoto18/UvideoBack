import { BaseEntity } from "src/constants/base.entity";
import { Roles } from "src/constants/roles";
import { ObjectType,Field} from '@nestjs/graphql'

@ObjectType()
export class UserEntity extends BaseEntity{
    @Field()
    _id: string;
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    password: string;
    @Field()
    role: Roles;
}