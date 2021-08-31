import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule} from '@angular/material/list';




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
    MatInputModule,
    MatListModule,
    MatGridListModule,

    IngredientRoutingModule,

  ]
})
export class IngredientModule { }
