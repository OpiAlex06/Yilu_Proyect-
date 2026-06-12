import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { ProductStore } from '../../state/product.store';

import { PageHeader } from '../../../../shared/components/page-header/page-header';

@Component({
  selector: 'app-product-list',
  imports: [PageHeader],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);

  readonly productStore = inject(ProductStore);

  ngOnInit(): void {
  if (this.productStore.totalProducts() === 0) {
    const products = this.productService.getAll();

    this.productStore.setProducts(products);
  }
  }

  goToCreate(): void {
    this.router.navigate(['/products/create']);
  }
  deleteProduct(id: string): void {
  const confirmed = confirm(
    '¿Deseas eliminar este producto?'
  );

  if (!confirmed) {
    return;
  }

  this.productStore.removeProduct(id);
  }
  editProduct(id: string): void {
  this.router.navigate(['/products/edit', id]);
  }
}
