import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit {

  
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //emite la informacion del input
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); //emite la inforamcioon del input

  @Input() placeholder:string = '';
  
  debouncer: Subject<string>  = new Subject();
  
  termino:string = '';
  
  ngOnInit(){ //se dispara unica vez cunado el compenete es creado y esta inicializado.
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }


  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPrecionada(){
    this.debouncer.next(this.termino);
  }


}
