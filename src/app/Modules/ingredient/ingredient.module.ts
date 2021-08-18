import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientRoutingModule } from './ingredient-routing.module';
import { SearchIngredientComponent } from './search-ingredient/search-ingredient.component';
import { DetailsIngredientComponent } from './details-ingredient/details-ingredient.component';


@NgModule({
  declarations: [
    SearchIngredientComponent,
    DetailsIngredientComponent
  ],
  imports: [
    CommonModule,
    IngredientRoutingModule
  ]
})
export class IngredientModule { }
