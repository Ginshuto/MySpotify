import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { PlaylistService } from './playlist.service';

@Injectable({
  providedIn: 'root'
})
export class AddtrackService {
  httpOptions;
  body;
  addTrack(uri,id,clientID) {    
    this.body = {};
    return this.http.post('https://api.spotify.com/v1/users/'+clientID+'/playlists/'+id+'/tracks?uris='+uri, this.body, this.httpOptions);
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
