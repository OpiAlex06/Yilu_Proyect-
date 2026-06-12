import { Injectable, computed, signal } from '@angular/core';

import { ProductDetail } from '../models/product-detail.model';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailStore {

  private readonly _productDetails =
    signal<ProductDetail[]>([]);

  readonly productDetails =
    this._productDetails.asReadonly();

  readonly totalProductDetails = computed(
    () => this._productDetails().length
  );

  setProductDetails(
    productDetails: ProductDetail[]
  ): void {
    this._productDetails.set(productDetails);
  }

  addProductDetail(
  productDetail: ProductDetail
  ): void {
  this._productDetails.update(details => [
    ...details,
    productDetail,
  ]);
  }

  removeProductDetail(
    productId: string
  ): void {
    this._productDetails.update(details =>
      details.filter(
        detail =>
          detail.product.id !== productId
      )
    );
  }

  getByProductId(
    productId: string
  ): ProductDetail | undefined {

    return this._productDetails().find(
      detail =>
        detail.product.id === productId
    );
  }
  updateInventoryQuantity(
  productId: string,
  colorId: string,
  sizeId: string,
  quantity: number
): void {

  this._productDetails.update(details =>
    details.map(detail => {

      if (detail.product.id !== productId) {
        return detail;
      }

      return {
        ...detail,
        colors: detail.colors.map(color => {

          if (color.id !== colorId) {
            return color;
          }

          return {
            ...color,
            inventories: color.inventories.map(inventory => {

              if (inventory.sizeId !== sizeId) {
                return inventory;
              }

              return {
                ...inventory,
                quantity,
              };

            }),
          };

        }),
      };

    })
  );

}
}
