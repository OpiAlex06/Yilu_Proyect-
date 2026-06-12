import { Injectable, computed, signal } from '@angular/core';
import { Size } from '../../../core/models/size.model';

@Injectable({
  providedIn: 'root',
})
export class SizeStore {
  private readonly _sizes = signal<Size[]>([]);

  readonly sizes = this._sizes.asReadonly();

  readonly totalSizes = computed(
    () => this._sizes().length
  );

  readonly activeSizes = computed(() =>
    this._sizes().filter(size => size.isActive)
  );

  setSizes(sizes: Size[]): void {
    this._sizes.set(sizes);
  }

  addSize(size: Size): void {
    this._sizes.update(sizes => [
      ...sizes,
      size,
    ]);
  }

  removeSize(id: string): void {
    this._sizes.update(sizes =>
      sizes.filter(size => size.id !== id)
    );
  }
}
