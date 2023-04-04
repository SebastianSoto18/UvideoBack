import { InputType, Field } from "@nestjs/graphql";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";
import { Roles } from "src/constants/roles";

@InputType()
export class CreateUserInput{
    @IsOptional()
    _id: Types.ObjectId;
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