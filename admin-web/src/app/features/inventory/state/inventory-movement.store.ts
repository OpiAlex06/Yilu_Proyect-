import { Injectable, computed, signal } from '@angular/core';

import { InventoryMovement } from '../models/inventory-movement.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryMovementStore {

  private readonly _movements =
    signal<InventoryMovement[]>([]);

  readonly movements =
    this._movements.asReadonly();

  readonly totalMovements = computed(
    () => this._movements().length
  );

  addMovement(
    movement: InventoryMovement
  ): void {

    this._movements.update(movements => [
      ...movements,
      movement,
    ]);

  }

  removeMovement(
    id: string
  ): void {

    this._movements.update(movements =>
      movements.filter(
        movement => movement.id !== id
      )
    );

  }

}
