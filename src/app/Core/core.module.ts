import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { DrinkService } from './services/drink.service';
import { HttpClientModule } from '@angular/common/http';
import{MatMenuModule} from '@angular/material/menu'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ColorNavButtonDirective } from './directives/color-nav-button.directive';





@NgModule({
  declarations: [
    
  
    // ColorNavButtonDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,       
  ],
  providers:[
    HttpService,
    DrinkService,
  ]
})
export class CoreModule { }
