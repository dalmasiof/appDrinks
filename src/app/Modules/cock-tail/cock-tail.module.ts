import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CockTailRoutingModule } from './cock-tail-routing.module';
import { RandomCockTailComponent } from './random-cock-tail/random-cock-tail.component';
import { SearchmCockTailComponent } from './searchm-cock-tail/searchm-cock-tail.component';
import { SearchCockTailComponent } from './search-cock-tail/search-cock-tail.component';
import { DetailsCockTailComponent } from './details-cock-tail/details-cock-tail.component';


@NgModule({
  declarations: [
    RandomCockTailComponent,
    SearchmCockTailComponent,
    SearchCockTailComponent,
    DetailsCockTailComponent
  ],
  imports: [
    CommonModule,
    CockTailRoutingModule
  ]
})
export class CockTailModule { }
