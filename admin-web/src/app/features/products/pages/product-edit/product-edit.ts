import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ProductStore } from '../../state/product.store';
import { Product } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.scss',
})
export class ProductEdit implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  private readonly productStore = inject(ProductStore);

  product?: Product;

  readonly form = this.fb.group({
    reference: ['', Validators.required],
    name: ['', Validators.required],
    description: [''],
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    const product = this.productStore.getById(id);

    if (!product) {
      return;
    }

    this.product = product;

    this.form.patchValue({
      reference: product.reference,
      name: product.name,
      description: product.description,
    });
  }

  save(): void {
    if (!this.product) {
      return;
    }

    const updatedProduct: Product = {
      ...this.product,

      reference:
        this.form.value.reference ?? '',

      name:
        this.form.value.name ?? '',

      description:
        this.form.value.description ?? '',

      updatedAt: new Date(),
    };

    this.productStore.updateProduct(
      updatedProduct
    );

    this.router.navigate(['/products']);
  }
}
