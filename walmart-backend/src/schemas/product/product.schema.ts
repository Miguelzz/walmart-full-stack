import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
class DocProduct {
  @Prop()
  index: string;

  @Prop()
  brand: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(DocProduct);
