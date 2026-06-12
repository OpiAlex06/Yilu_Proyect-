export interface Product {
  id: string;
  reference: string;
  name: string;
  categoryId: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
