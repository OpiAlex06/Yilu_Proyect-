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

  editStock(
    productId: string,
    colorId: string,
    sizeId: string,
    productName: string,
    colorName: string,
    sizeCode: string,
    quantity: number
  ): void {

    const newQuantity = prompt(
      `Editar stock

Producto: ${productName}
Color: ${colorName}
Talla: ${sizeCode}

Stock actual: ${quantity}`,
      quantity.toString()
    );

    if (newQuantity === null) {
      return;
    }

    const quantityNumber =
      Number(newQuantity);

    if (isNaN(quantityNumber)) {
      return;
    }

    this.productDetailStore
      .updateInventoryQuantity(
        productId,
        colorId,
        sizeId,
        quantityNumber
      );

  }

}
