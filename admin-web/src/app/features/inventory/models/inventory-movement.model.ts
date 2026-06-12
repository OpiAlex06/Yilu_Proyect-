export interface InventoryMovement {
  id: string;

  productId: string;
  colorId: string;
  sizeId: string;

  type: 'ENTRY' | 'EXIT';

  quantity: number;

  createdAt: Date;
}
