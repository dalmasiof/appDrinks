import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchIngredientComponent } from './search-ingredient/search-ingredient.component';

const routes: Routes = [
  {path:'Search', component:SearchIngredientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
