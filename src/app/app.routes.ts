import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
      { path: '', component: Home },
      { path: 'elements', 
        loadComponent: () => import('./elements/elements-home/elements-home').then(m => m.ElementsHome) },
      { path: 'collections', 
        loadComponent: () => import('./collections/collection-home/collection-home').then(m => m.CollectionHome) },
      { path: '**', component: NotFound }


];
