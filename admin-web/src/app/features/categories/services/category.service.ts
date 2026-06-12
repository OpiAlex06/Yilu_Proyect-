import { Injectable } from '@angular/core';
import { Category } from '../../../core/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getAll(): Category[] {
    return [
      {
        id: crypto.randomUUID(),
        name: 'Jogger',
        description: 'Jogger para dama',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: crypto.randomUUID(),
        name: 'Falda',
        description: 'Falda para dama',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
