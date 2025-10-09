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
    path: 'model/:modelName/:operation',
    loadComponent: () => import('./pages/model/model.page').then(m => m.ModelPage)
  },
  {
    path: 'model/:modelName/:operation/:modelId',
    loadComponent: () => import('./pages/model/model.page').then(m => m.ModelPage)
  }
];
