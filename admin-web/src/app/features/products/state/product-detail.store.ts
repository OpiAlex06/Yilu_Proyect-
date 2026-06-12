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
}
