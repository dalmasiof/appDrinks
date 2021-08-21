import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'Principal',component:HomeComponent},

  { path: 'Drink', loadChildren: () => import('../drink/drink.module').then(m=>m.DrinkModule) },

  {path:'',component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
