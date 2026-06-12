export interface ProductColorStock {
  id: string;
  colorName: string;

  inventories: {
    sizeId: string;
    sizeCode: string;
    quantity: number;
  }[];
}
