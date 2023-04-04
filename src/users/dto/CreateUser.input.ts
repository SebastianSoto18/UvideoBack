import { InputType, Field } from "@nestjs/graphql";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Roles } from "src/constants/roles";

@InputType()
export class CreateUserInput{
    @IsNotEmpty()
    @IsString()
    @Field()
    name: string;
    @IsNotEmpty()
    @IsString()
    @Field()
    email: string;
    @IsNotEmpty()
    @IsString()
    @Field()
    password: string;
    @IsNotEmpty()
    @IsEnum(Roles)
    @Field()
    role: string;
}