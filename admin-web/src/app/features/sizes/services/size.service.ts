import { Injectable } from '@angular/core';
import { Size } from '../../../core/models/size.model';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  getAll(): Size[] {
    return [
      {
        id: crypto.randomUUID(),
        code: '6',
        description: 'Talla 6',
        isActive: true,
      },
      {
        id: crypto.randomUUID(),
        code: '8',
        description: 'Talla 8',
        isActive: true,
      },
      {
        id: crypto.randomUUID(),
        code: '10',
        description: 'Talla 10',
        isActive: true,
      },
      {
        id: crypto.randomUUID(),
        code: '12',
        description: 'Talla 12',
        isActive: true,
      },
    ];
  }
}
