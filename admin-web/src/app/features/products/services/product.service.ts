import { Injectable } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getAll(): Product[] {
    return [
      {
        id: crypto.randomUUID(),
        reference: 'J001',
        name: 'Jogger Cargo',
        categoryId: '1',
        description: 'Jogger cargo para dama',
        imageUrl: '',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        reference: 'F001',
        name: 'Falda Denim',
        categoryId: '2',
        description: 'Falda denim clásica',
        imageUrl: '',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
