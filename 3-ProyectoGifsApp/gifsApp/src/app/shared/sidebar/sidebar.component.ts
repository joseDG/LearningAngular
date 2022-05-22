import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial(){
    return this.GifsService.historial;
  }

  constructor(private GifsService: GifsService ){}

  //Obtengo las iamgenes mediante click del sidebar
  buscar(termino: string){
    this.GifsService.buscarGifs(termino);
  }
}
