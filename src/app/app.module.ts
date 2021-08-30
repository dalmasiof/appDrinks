import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Core/nav-bar/nav-bar.component';
import { FooterComponent } from './Core/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CoreModule } from './Core/core.module';
import { ColorNavButtonDirective   } from './Core/directives/color-nav-button.directive';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ColorNavButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    CoreModule,
    MatMenuModule,

    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
