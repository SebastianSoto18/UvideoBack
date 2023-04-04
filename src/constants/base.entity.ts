import { ObjectType,Field, Int,} from '@nestjs/graphql'


@ObjectType()
export abstract class BaseEntity {
    @Field()
    createdAt: Date;
    @Field()
    updatedAt: Date;
}