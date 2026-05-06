import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'modules',
    loadComponent: () =>
      import('./pages/modules/modules.page').then((m) => m.ModulesPage),
  },
  {
    path: 'examples',
    loadComponent: () =>
      import('./pages/examples/examples.page').then((m) => m.ExamplesPage),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features/features.page').then((m) => m.FeaturesPage),
  },
];
