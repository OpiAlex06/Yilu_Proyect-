import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  private readonly _products = signal<Product[]>([]);

  readonly products = this._products.asReadonly();

  readonly totalProducts = computed(
    () => this._products().length
  );

  setProducts(products: Product[]): void {
    this._products.set(products);
  }

  addProduct(product: Product): void {
    this._products.update(products => [
      ...products,
      product,
    ]);
  }

  removeProduct(id: string): void {
    this._products.update(products =>
      products.filter(product => product.id !== id)
    );
  }

  getById(id: string): Product | undefined {
  return this._products().find(
    product => product.id === id
  );
  }
  updateProduct(updatedProduct: Product): void {
  this._products.update(products =>
    products.map(product =>
      product.id === updatedProduct.id
        ? updatedProduct
        : product
    )
  );
  }
}
