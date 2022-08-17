import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  constructor() { console.log('constructor')}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges');
  }

  ngDoCheck(): void {
  }

  ngAfterContentInit(): void {
    console.log('ngAfeterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck');
  }

  ngAfterViewInit(): void {
    console.log('ngAfeterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterView');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
