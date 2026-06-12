import { Component, inject } from '@angular/core';

import { ProductDetailStore } from '../../../products/state/product-detail.store';

@Component({
  selector: 'app-inventory-list',
  imports: [],
  templateUrl: './inventory-list.html',
  styleUrl: './inventory-list.scss',
})
export class InventoryList {
  readonly productDetailStore =
    inject(ProductDetailStore);
}
