import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletetrackService {
  httpOptions;
  body;
  deleteTrack(uri, id,clientID) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }),
      body: { "tracks": [{ "uri": uri }] },
      responseType: 'json',
    };
    return this.http.delete('https://api.spotify.com/v1/users/'+clientID+'/playlists/' + id + '/tracks', this.httpOptions);
  };

  constructor(private http: HttpClient) {
  }
}
