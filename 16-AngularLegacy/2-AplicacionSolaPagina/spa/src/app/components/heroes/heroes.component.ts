import { Component, OnInit } from '@angular/core';
import { HeroeService, Heroe } from '../../servicios/heroe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroeService,
               private router:Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
  }

}
