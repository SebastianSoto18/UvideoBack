import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Roles } from "src/constants/roles";
import { Document, Model, Types } from "mongoose";

@Schema()
class User{
    @Prop({ type: Types.ObjectId, default: Types.ObjectId })
    _id: string;
    @Prop({default: Date.now})
    createdAt: Date;
    @Prop({default: Date.now})
    updatedAt: Date;
    @Prop({required: true,index: true, unique: true})
    name: string;
    @Prop({required: true, unique: true, index: true})
    email: string;
    @Prop({required: true})
    password: string;
    @Prop({required: true})
    role: Roles;
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;
export type UserModel = Model<User>;