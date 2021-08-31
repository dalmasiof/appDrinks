import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkService } from './services/drink.service';
import { HttpService } from './services/http.service';
import { IngredientService } from './services/ingredient.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], providers:[
    HttpService,
    DrinkService,
    IngredientService
  ]
})
export class SharedModule { }
