import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { CREATE_PRODUCTS, SEARCH_PRODUCTS } from './store/product.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {
    this.store.dispatch(new CREATE_PRODUCTS());
    this.store.dispatch(new SEARCH_PRODUCTS('zdczs'));
  }

  searchProduct(search: any) {
    if (!isNaN(Number(search.value.trim())) || search.value.trim().length > 2) {
      this.store.dispatch(new SEARCH_PRODUCTS(search.value || 'zdczs'));
    }
  }
}
