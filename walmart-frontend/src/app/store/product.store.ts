import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Product, ProductService } from '../services/product.service';

export class SEARCH_PRODUCTS {
  static readonly type = '[product] search';
  constructor(public search: string) {}
}

@State<{
  products: Product[];
}>({
  name: 'product',
  defaults: {
    products: [],
  },
})
@Injectable()
export class ProductState {
  constructor(private productService: ProductService) {}

  @Selector()
  static products(state: any) {
    return state.products;
  }

  @Action(SEARCH_PRODUCTS)
  search(ctx: StateContext<any>, payload: SEARCH_PRODUCTS) {
    console.log(payload);
    const state = ctx.getState();

    this.productService.search(payload.search).subscribe((x) =>
      ctx.setState({
        ...state,
        products: x,
      })
    );
  }
}
