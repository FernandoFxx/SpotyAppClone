import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }
/* --------------------------Hacer La Peticion De Api Una Sola Vez---------------------- */
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDMTU5Aes0iSbKkX8ZY4b0JGE92ZWOCt8oiAiI1YsBUvNsOaS-eSImgfYO1dv_6jhvzwfMhFmRkjzbA9bc'
    });
    return this.http.get(url, { headers });
  }
  /* ----------------------------------------------------------------------------------- */
  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));
  }
/* ------------------------------------------------------------------------------------- */
  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=25`)
      .pipe(map(data => data['artists'].items));
  }
/* ------------------------------------------------------------------------------------- */
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    /*       .pipe(map(data => data['artists'].items));*/
  }
  /* ----------------------------------------------------------------------------------- */
  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
/* -------------------------------------------------------------------------------------- */