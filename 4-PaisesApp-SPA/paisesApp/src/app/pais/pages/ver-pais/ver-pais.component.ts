import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap, tap } from 'rxjs/operators';


import { PaisService } from '../../services/pais.service';
import { CountryInterface } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})

export class VerPaisComponent implements OnInit {

  pais!: CountryInterface;

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorId( id )  ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
  }
}
