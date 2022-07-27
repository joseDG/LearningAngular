import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { HeroeService } from '../../servicios/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
    private _heroesService: HeroeService
  ){

  this.activatedRoute.params.subscribe( params =>{
  this.heroe = this._heroesService.getHeroe( params['id'] );
  // console.log(this.heroe);
  });

}

}
