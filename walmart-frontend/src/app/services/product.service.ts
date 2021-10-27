import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

export interface Product {
  index: number;
  description: string;
  image: string;
  brand: string;
  price: number;
  discount: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private apollo: Apollo) {}

  search(search: string) {
    type Result = {
      products: Product[];
    };

    return this.apollo
      .watchQuery<Result>({
        query: gql`
          {
            products(search: "${search}") {
              index
              description
              brand
              price
              discount
              image
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((x) => [...x.data.products]),
        map((x) => x.sort((a, b) => (a.discount > b.discount ? -1 : 1)))
      );
  }
}
