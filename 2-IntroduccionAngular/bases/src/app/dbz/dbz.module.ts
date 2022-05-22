import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Agregando componentes
import { PersonajesComponent } from './personajes/personajes.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarComponent } from './agregar/agregar.component';

//Agregando el servicio
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    PersonajesComponent,
    MainPageComponent,
    AgregarComponent
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzService
  ]
})

export class DbzModule { }
