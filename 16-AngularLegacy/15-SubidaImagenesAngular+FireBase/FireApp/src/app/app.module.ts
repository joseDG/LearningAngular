import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CargaComponent } from './components/carga/carga.component';
import { FotosComponent } from './components/fotos/fotos.component';

import { AppRoutingModule } from './app-routing.module';
import { CargaImagenesService } from './services/carga-imagenes.service';

// Firebase
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule
  ],
  providers: [CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
