import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from 'src/app/services/product.service';
import { ProductState } from 'src/app/store/product.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select(ProductState.products) products$?: Observable<Product[]>;

  constructor(private store: Store) {}

  before(product: Product) {
    return product.price + product.price / (100 / product.discount);
  }

  ngOnInit(): void {}
}
