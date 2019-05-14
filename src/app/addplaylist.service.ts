import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddplaylistService {
  httpOptions;
  body;
  addPlaylist(name,clientID) {
    this.body = {"name" : name,};
    console.log("ADD PLAYLIST HEADER: ", this.httpOptions );
    return this.http.post('https://api.spotify.com/v1/users/'+clientID+'/playlists',this.body, this.httpOptions);
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
