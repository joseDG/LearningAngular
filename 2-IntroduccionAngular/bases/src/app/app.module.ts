import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';


@NgModule({
  declarations: [
    
  
    ContadorComponent
  ],
  imports: [
    BrowserModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
