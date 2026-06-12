import { Component, inject, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service';
import { CategoryStore } from '../../state/category.store';

import { PageHeader } from '../../../../shared/components/page-header/page-header';

@Component({
  selector: 'app-category-list',
  imports: [PageHeader],
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss',
})
export class CategoryList implements OnInit {
  private readonly categoryService = inject(CategoryService);
  readonly categoryStore = inject(CategoryStore);

  ngOnInit(): void {
    const categories = this.categoryService.getAll();

    this.categoryStore.setCategories(categories);
  }
}
