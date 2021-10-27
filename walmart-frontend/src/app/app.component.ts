import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductState, SEARCH_PRODUCTS } from './store/product.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  searchProduct(search: any) {
    if (!isNaN(Number(search.value.trim())) || search.value.trim().length > 2) {
      this.store.dispatch(new SEARCH_PRODUCTS(search.value));
    }
  }
}
