import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly client_ID: string = '12ebc58d644148119c27df63ef38fc7d';
  readonly redirect_URI : string = "http://localhost:4200/login";
  readonly scopes : string = 'user-read-private user-read-email playlist-modify playlist-modify-public user-library-read playlist-modify-private';
  authorizeURL : string = "https://accounts.spotify.com/authorize?client_id="+
  this.client_ID + "&response_type=token&redirect_uri="+
  this.redirect_URI +
  "&scope=" +
  this.scopes;

  saveToken(frags : URLSearchParams){
    localStorage.setItem('token', frags.get('access_token'));
  }
  constructor() { }
}
