import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Importando Rutas
import { APP_ROUTING } from './app-routes.module';

//Importacion del servicio
import { HeroeService } from './servicios/heroe.service';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BuscadorComponent,
    HeroeComponent,
    HeroesComponent,
    HeroeTarjetaComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
