import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-scream',
  templateUrl: './full-scream.component.html',
  styles: [
    `
    #mapa {
      height: 100%;
      width: 100%; 
    }
    `
  ]
})
export class FullScreamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.921029433568, 45.28719674822362],
      zoom: 18
    });
  }

}
