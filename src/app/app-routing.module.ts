import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'Drink', loadChildren: () => import('./Modules/drink/drink.module').then(m=>m.DrinkModule) },

  
  { path: 'Ingredients', loadChildren: () => import('./Modules/ingredient/ingredient.module').then(m=>m.IngredientModule) },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
