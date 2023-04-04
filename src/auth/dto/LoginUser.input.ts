import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class LoginUserInput{
    @IsNotEmpty()
    @IsString()
    @Field()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    @Field()
    password: string;
}