import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomDrinkComponent } from './random-drink/random-drink.component';
import { DetailDrinkComponent } from './detail-drink/detail-drink.component';
import { SearchDrinkComponent } from './search-drink/search-drink.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeModule } from '../home/home.module';
import { DrinkRoutingModule } from './drink-routing-module';






@NgModule({
  declarations: [
    RandomDrinkComponent,
    DetailDrinkComponent,
    SearchDrinkComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    DrinkRoutingModule,
    MatCardModule,
    HomeModule,
    MatIconModule,
    MatListModule
    
     
  ],


  providers: [MatGridListModule],
  
})
export class DrinkModule { }