import { Component, inject } from '@angular/core';

import { ProductDetailStore } from '../../../products/state/product-detail.store';
import { InventoryMovementStore } from '../../state/inventory-movement.store';
import { InventoryMovement } from '../../models/inventory-movement.model';

@Component({
  selector: 'app-inventory-list',
  imports: [],
  templateUrl: './inventory-list.html',
  styleUrl: './inventory-list.scss',
})
export class InventoryList {

  readonly productDetailStore =
    inject(ProductDetailStore);
    readonly inventoryMovementStore =
  inject(InventoryMovementStore);

  editStock(
    productId: string,
    colorId: string,
    sizeId: string,
    productName: string,
    colorName: string,
    sizeCode: string,
    quantity: number
  ): void {

    const newQuantity = prompt(
      `Editar stock

Producto: ${productName}
Color: ${colorName}
Talla: ${sizeCode}

Stock actual: ${quantity}`,
      quantity.toString()
    );

    if (newQuantity === null) {
      return;
    }

    const quantityNumber =
  Number(newQuantity);

    if (isNaN(quantityNumber)) {
      alert('Debe ingresar un número válido');
      return;
    }

    if (quantityNumber < 0) {
      alert('El stock no puede ser negativo');
      return;
    }

    if (!Number.isInteger(quantityNumber)) {
      alert('El stock debe ser un número entero');
      return;
    }

    const difference =
  quantityNumber - quantity;

this.productDetailStore
  .updateInventoryQuantity(
    productId,
    colorId,
    sizeId,
    quantityNumber
  );

if (difference !== 0) {

  const movement: InventoryMovement = {
    id: crypto.randomUUID(),

    productId,
    colorId,
    sizeId,

    type:
      difference > 0
        ? 'ENTRY'
        : 'EXIT',

    quantity: Math.abs(difference),

    createdAt: new Date(),
  };

  this.inventoryMovementStore
    .addMovement(movement);

  console.log(
    'Movimiento registrado:',
    movement
  );

}

  }

}
