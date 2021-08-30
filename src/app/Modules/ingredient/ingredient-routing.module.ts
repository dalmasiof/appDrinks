import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsIngredientComponent } from './details-ingredient/details-ingredient.component';
import { SearchIngredientComponent } from './search-ingredient/search-ingredient.component';

const routes: Routes = [
  {path:'Search', component:SearchIngredientComponent},
  {path:'Details/:Id', component:DetailsIngredientComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
