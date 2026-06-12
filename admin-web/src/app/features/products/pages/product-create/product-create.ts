import { Component, inject, OnInit } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';

import { CategoryService } from '../../../categories/services/category.service';
import { Category } from '../../../../core/models/category.model';

import { SizeService } from '../../../sizes/services/size.service';
import { Size } from '../../../../core/models/size.model';

import { ProductColorStock } from '../../models/product-color-stock.model';

import { Product } from '../../../../core/models/product.model';
import { ProductStore } from '../../state/product.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  imports: [
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './product-create.html',
  styleUrl: './product-create.scss',
})
export class ProductCreate implements OnInit {
  private readonly fb = inject(FormBuilder);

  private readonly categoryService = inject(CategoryService);
  private readonly sizeService = inject(SizeService);
  private readonly productStore = inject(ProductStore);
  private readonly router = inject(Router);

  categories: Category[] = [];
  sizes: Size[] = [];

  colorName = '';

  productColors: ProductColorStock[] = [];

  readonly form = this.fb.group({
    reference: ['', Validators.required],
    name: ['', Validators.required],
    categoryId: ['', Validators.required],
    description: [''],
    imageUrl: [''],
  });

  ngOnInit(): void {
    this.categories = this.categoryService.getAll();

    this.sizes = this.sizeService.getAll();
  }

  save(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const product: Product = {
    id: crypto.randomUUID(),
    reference: this.form.value.reference ?? '',
    name: this.form.value.name ?? '',
    categoryId: this.form.value.categoryId ?? '',
    description: this.form.value.description ?? '',
    imageUrl: this.form.value.imageUrl ?? '',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  this.productStore.addProduct(product);

  console.log('Producto:', product);
  console.log('Colores:', this.productColors);

  this.router.navigate(['/products']);
  }

  addColor(): void {
    const color = this.colorName.trim();

    if (!color) {
      return;
    }

    this.productColors.push({
      id: crypto.randomUUID(),
      colorName: color,
      inventories: this.sizes.map(size => ({
        sizeId: size.id,
        sizeCode: size.code,
        quantity: 0,
      })),
    });

    this.colorName = '';
  }

  removeColor(id: string): void {
    this.productColors = this.productColors.filter(
      color => color.id !== id
    );
  }
}
