import { Resolver } from '@nestjs/graphql';
import { Product } from '../../schemas/product/product.model';

@Resolver(() => Product)
export class CategoryResolver {
  constructor() {
    console.log('category');
  }
}
