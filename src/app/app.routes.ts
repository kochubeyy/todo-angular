import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent),
  },
  {
    path: 'company/:id',

    loadComponent: () => import('./pages/company/company.component').then(mod => mod.CompanyComponent),

  },
  {
    path: 'create',

    loadComponent: () => import('./pages/create/create.component').then(mod => mod.CreateComponent),

  },
  {
    path: 'update/:id',

    loadComponent: () => import('./pages/edit/edit.component').then(mod => mod.EditComponent),
  },
];
