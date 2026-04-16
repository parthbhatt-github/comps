import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing-module';
import { CollectionHome } from './collection-home/collection-home';

@NgModule({
  declarations: [],
  imports: [CommonModule, CollectionsRoutingModule,CollectionHome],
  exports: []
})
export class CollectionsModule {}
