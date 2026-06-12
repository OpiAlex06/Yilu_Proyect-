import { Injectable, computed, signal } from '@angular/core';
import { Category } from '../../../core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryStore {
  private readonly _categories = signal<Category[]>([]);

  readonly categories = this._categories.asReadonly();

  readonly totalCategories = computed(
    () => this._categories().length
  );

  readonly activeCategories = computed(() =>
    this._categories().filter(category => category.isActive)
  );

  setCategories(categories: Category[]): void {
    this._categories.set(categories);
  }

  addCategory(category: Category): void {
    this._categories.update(categories => [
      ...categories,
      category,
    ]);
  }

  removeCategory(id: string): void {
    this._categories.update(categories =>
      categories.filter(category => category.id !== id)
    );
  }
}
