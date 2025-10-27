import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'dashboard',

    loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  },
 {
    path: 'model',
    loadComponent: () => import('./pages/model/model.page').then(m => m.ModelPage)
  },
  {
    path: 'model/:modelName',
    loadComponent: () => import('./pages/model/model.page').then(m => m.ModelPage)
  },
  {
    path: 'model/:modelName/:operation',
    loadComponent: () => import('./pages/model/model.page').then(m => m.ModelPage)
  },
  {
    path: 'model/:modelName/:operation/:modelId',
    loadComponent: () => import('./pages/model/model.page').then(m => m.ModelPage)
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.page').then( m => m.ProductsPage)
  },
  {
    path: 'batches',
    loadComponent: () => import('./pages/batches/batches.page').then( m => m.BatchesPage)
  },
  {
    path: 'audit',
    loadComponent: () => import('./pages/audit/audit.page').then( m => m.AuditPage)
  },
  {
    path: 'account',
    loadComponent: () => import('./pages/account/account.page').then( m => m.AccountPage)
  }
];
