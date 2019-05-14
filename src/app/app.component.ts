import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { PlaylistService } from './playlist.service';
import { TrackService } from './track.service';
import { AddplaylistService } from './addplaylist.service';
import { SearchtrackService } from './searchtrack.service';
import { AddtrackService } from './addtrack.service';
import { DeletetrackService } from './deletetrack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySpotify';
  playlist;
  track;
  searchTracks;
  addtrack;
  playlistName: string = localStorage.getItem('playlistName');
  searchName: string = localStorage.getItem('search');
  showTrack(id, name,clientID) {
    localStorage.setItem('ID_Playlist', id);
    localStorage.setItem('playlistName', name);
    localStorage.setItem('Client_ID', clientID);
    this.playlistName = localStorage.getItem('playlistName');
    this.TrackService.getTrack(localStorage.getItem('ID_Playlist')).subscribe((res) => {
      this.track = res;
    });
  }
  search(name) {
    localStorage.setItem('search', name);
    this.searchName = localStorage.getItem('search');
    this.searchService.searchTrack(localStorage.getItem('search')).subscribe((res) => {
      this.searchTracks = res;
    });
  }
  addTrackToPlaylist(uri) {
    if (confirm("This track will be added to the above playlist.")) {
      localStorage.setItem('uri_Track', uri);
      this.addTrackService.addTrack(localStorage.getItem('uri_Track'), localStorage.getItem('ID_Playlist'),localStorage.getItem('Client_ID')).subscribe();
      this.TrackService.getTrack(localStorage.getItem('ID_Playlist')).subscribe((res) => {
        this.track = res;
      });
    }
  }
  newPlaylist(name) {
    this.addPlaylistService.addPlaylist(name,localStorage.getItem('Client_ID')).subscribe();
    this.PlaylistService.getPlaylist().subscribe((res) => {
      this.playlist = res;
      alert('You need to reload the page to display the new Playlist.');
    });
  }
  removeTrackfromPlaylist(uri) {
    if (confirm("Are you sure you want to delete this track ?")) {
      localStorage.setItem('uri_RemoveTrack', uri);
      this.deleteTrackService.deleteTrack(localStorage.getItem('uri_RemoveTrack'), localStorage.getItem('ID_Playlist'),localStorage.getItem('Client_ID')).subscribe();
      this.TrackService.getTrack(localStorage.getItem('ID_Playlist')).subscribe((res) => {
        this.track = res;
      });
    }
  }
  constructor(public authService: AuthService, private PlaylistService: PlaylistService, private TrackService: TrackService, private addPlaylistService: AddplaylistService, private searchService: SearchtrackService, private addTrackService: AddtrackService, private deleteTrackService: DeletetrackService) {
    localStorage.removeItem('ID_Playlist');
    localStorage.removeItem('uri_RemoveTrack');
    localStorage.removeItem('uri_Track');
    localStorage.removeItem('playlistName');
    localStorage.removeItem('search');
    if (localStorage.getItem('token')) {
      this.PlaylistService.getPlaylist().subscribe((res) => {
        this.playlist = res;
      });
    }
  }
}
