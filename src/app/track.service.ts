import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  httpOptions;

  getTrack(id) {
    return this.http.get('https://api.spotify.com/v1/playlists/'+id+'/tracks', this.httpOptions);
  };

  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),
      responseType: 'json',
    };
  }
}
