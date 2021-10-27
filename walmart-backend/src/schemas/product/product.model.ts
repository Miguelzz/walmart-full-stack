import { ObjectType, Field, InputType, ID, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  index: string;

  @Field()
  brand: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field(() => Int)
  discount: number;

  @Field(() => Float)
  price: number;
}

@InputType()
export class ProductInput {
  @Field()
  index: string;

  @Field()
  brand: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field(() => Float)
  price: number;
}
