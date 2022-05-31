import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CountryInterface } from '../interfaces/pais-interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,alpha2Code,flag,population');
  }
  

  constructor( private http: HttpClient ) { }  //se utiliza http para poder hacer peticiones a la api

  buscarPais( termino: string ): Observable<CountryInterface[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<CountryInterface[]>( url, { params: this.httpParams } );
  }

  buscarCapital( termino: string ):Observable<CountryInterface[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<CountryInterface[]>( url, { params: this.httpParams } );
  }

  getPaisPorId( id: string ):Observable<CountryInterface>{
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<CountryInterface>( url );
  }
  

  buscarRegion( region: string ): Observable<CountryInterface[]> {

    const url = `${ this.apiUrl }/regionalbloc/${ region }`;

    return this.http.get<CountryInterface[]>( url, { params: this.httpParams } )
            .pipe(
              tap( console.log )
            )
  }


}
