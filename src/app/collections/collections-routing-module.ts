import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHome } from './collection-home/collection-home';
import { Biography } from './biography/biography';
import { Companies } from './companies/companies';
import { Partners } from './partners/partners';

const routes: Routes = [
   { 
    path: 'collections', component: CollectionHome ,
    children: [
      { path: '', component: Biography, pathMatch: 'full' },
      { path: 'companies', component: Companies },
      { path: 'partners', component: Partners }
    ]
  }, 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
