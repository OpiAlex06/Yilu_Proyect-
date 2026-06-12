import { Product } from '../../../core/models/product.model';
import { ProductColorStock } from './product-color-stock.model';

export interface ProductDetail {
  product: Product;
  colors: ProductColorStock[];
}
