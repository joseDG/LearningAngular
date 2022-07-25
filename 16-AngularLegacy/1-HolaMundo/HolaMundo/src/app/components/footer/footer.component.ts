import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  anio: number;
  nombre:string = 'Jose Luis';
  apellido:string = 'Diaz Gonzalez';

  constructor() {
    this.anio = new Date().getFullYear() + 1;
  }

  ngOnInit(): void {
  }

}
