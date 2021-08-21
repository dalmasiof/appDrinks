import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'Home/Principal', loadChildren: () => import('./Modules/home/home.module').then(m=>m.HomeModule) },

  { path: '', loadChildren: () => import('./Modules/home/home.module').then(m=>m.HomeModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
