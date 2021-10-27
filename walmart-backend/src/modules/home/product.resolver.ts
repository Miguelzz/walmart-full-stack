import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { ProductService } from 'src/services/product.service';
import { discount } from 'src/shared/functions';
import { Product, ProductInput } from '../../schemas/product/product.model';
import products from '../../shared/products';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {
    console.log('product');
  }

  @Query(() => [Product])
  async products(@Args('search', { type: () => String }) search: string) {
    const all = await this.productService.findPalindrome(search);
    return all.map((x) => discount(x));
  }

  @Mutation(() => Product)
  async createProduct(@Args('product') product: ProductInput) {
    return this.productService.create(product);
  }

  @Mutation(() => [Product])
  async createProducts() {
    const count = await this.productService.count();

    if (count == 0) {
      const all = products.map((p, i) =>
        this.productService.create({
          index: i.toString(),
          ...p,
        }),
      );
      return Promise.all(all);
    }

    return [];
  }
}
