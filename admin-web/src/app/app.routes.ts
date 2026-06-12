import { Route } from '@angular/router';

import { Shell } from './layout/shell/shell';
import { Dashboard } from './features/dashboard/dashboard';
import { CategoryList } from './features/categories/pages/category-list/category-list';
import { SizeList } from './features/sizes/pages/size-list/size-list';
import { ProductList } from './features/products/pages/product-list/product-list';
import { ProductCreate } from './features/products/pages/product-create/product-create';
import { ProductEdit } from './features/products/pages/product-edit/product-edit';
import { InventoryList } from './features/inventory/pages/inventory-list/inventory-list';

export const appRoutes: Route[] = [
  {
    path: '',
    component: Shell,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        component: Dashboard,
      },

      {
        path: 'categories',
        component: CategoryList,
      },

      {
        path: 'sizes',
        component: SizeList,
      },

      {
        path: 'products',
        component: ProductList,
      },
      {
      path: 'products/create',
      component: ProductCreate,
      },
      {
      path: 'products',
      component: ProductList,
      },
      {
      path: 'products/create',
      component: ProductCreate,
      },
      {
      path: 'products/edit/:id',
      component: ProductEdit,
      },
      {
      path: 'inventory',
      component: InventoryList,
      },
    ],
  },
];
