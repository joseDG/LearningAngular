import { Component, Input } from '@angular/core';
import { CountryInterface } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent  {

  @Input() paises: CountryInterface[] = [];

  constructor() { }



}
