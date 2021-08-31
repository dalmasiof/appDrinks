import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../Shared/services/http.service';
import { DrinkService } from '../Shared/services/drink.service';
import { HttpClientModule } from '@angular/common/http';
import{MatMenuModule} from '@angular/material/menu'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ColorNavButtonDirective } from './directives/color-nav-button.directive';
import { SharedModule } from '../Shared/shared.module';





@NgModule({
  declarations: [
    
  
    // ColorNavButtonDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,      
    SharedModule 
  ],
  providers:[
   
  ]
})
export class CoreModule { }
