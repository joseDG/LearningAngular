import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQARIAH1DBLxJmnDYPqIs2MEeId6u-4RepfE3waGAmyxKacoN0ozkjGNUL3Q4J7f2JVlYhGjE-q4vnAcANzVvYwhgQJnVAdSaGLo2RQd9U-JMi8VaScpEqooWpZWRjwvpa50Mca0YUisoaJL8y9GvM_GHQuD5Z5MpW3tN0fBcADSJ6yFV6JJ33QZWfQNPCio9H8'
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( (data: any )=> data['albums'].items));

  }

   getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data: any )=> data['artists'].items));

  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${ id }`)
                //.pipe( map( (data: any )=> data['artists'].items));
                

  }

  getTopTracks( id: string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( (data: any )=> data['tracks'].items));
  }
}
