import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },

  {
    path: 'elements',
    loadComponent: () =>
      import('./elements/elements-home/elements-home')
        .then(m => m.ElementsHome)
  },

  {
    path: 'collections',
    loadComponent: () =>
      import('./collections/collection-home/collection-home')
        .then(m => m.CollectionHome),

    // 👇 ADD CHILDREN HERE (this is the key fix)
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./collections/biography/biography')
            .then(m => m.Biography),
        pathMatch: 'full'
      },
      {
        path: 'companies',
        loadComponent: () =>
          import('./collections/companies/companies')
            .then(m => m.Companies)
      },
      {
        path: 'partners',
        loadComponent: () =>
          import('./collections/partners/partners')
            .then(m => m.Partners)
      }
    ]
  },

  {
    path: 'views',
    loadComponent: () =>
      import('./views/views-home/views-home')
        .then(m => m.ViewsHome)
  },

  { path: '**', component: NotFound }
];