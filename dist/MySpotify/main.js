(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addplaylist.service.ts":
/*!****************************************!*\
  !*** ./src/app/addplaylist.service.ts ***!
  \****************************************/
/*! exports provided: AddplaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddplaylistService", function() { return AddplaylistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddplaylistService = /** @class */ (function () {
    function AddplaylistService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            responseType: 'json',
        };
    }
    AddplaylistService.prototype.addPlaylist = function (name, clientID) {
        this.body = { "name": name, };
        console.log("ADD PLAYLIST HEADER: ", this.httpOptions);
        return this.http.post('https://api.spotify.com/v1/users/' + clientID + '/playlists', this.body, this.httpOptions);
    };
    ;
    AddplaylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddplaylistService);
    return AddplaylistService;
}());



/***/ }),

/***/ "./src/app/addtrack.service.ts":
/*!*************************************!*\
  !*** ./src/app/addtrack.service.ts ***!
  \*************************************/
/*! exports provided: AddtrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtrackService", function() { return AddtrackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AddtrackService = /** @class */ (function () {
    function AddtrackService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            responseType: 'json',
        };
    }
    AddtrackService.prototype.addTrack = function (uri, id, clientID) {
        this.body = {};
        return this.http.post('https://api.spotify.com/v1/users/' + clientID + '/playlists/' + id + '/tracks?uris=' + uri, this.body, this.httpOptions);
    };
    ;
    AddtrackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AddtrackService);
    return AddtrackService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");




var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n  margin: 15px;\r\n}\r\n\r\n* {\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\na {\r\n  color: white;\r\n}\r\n\r\n.login {\r\n  color: #509BF5;\r\n}\r\n\r\nh2,\r\nh3,\r\nh4 {\r\n  color: #1DB954;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na:hover {\r\n  font-weight: bold;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  margin: 5px 0 5px 0;\r\n}\r\n\r\nli::before {\r\n  content: \"♪\";\r\n  color: #1DB954;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 1em;\r\n  margin-left: -1em;\r\n}\r\n\r\ninput {\r\n  margin: 5px 15px 15px 0;\r\n  letter-spacing: 1px;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  background-color: #282828;\r\n  color: grey;\r\n  border: none;\r\n  padding: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\ninput[type=\"submit\"] {\r\n  background-color: #1DB954;\r\n  padding: 11px 10px;\r\n  color: white;\r\n  border-radius: 50px;\r\n  border: none;\r\n}\r\n\r\n.add,.delete {\r\n  text-decoration: underline;\r\n}\r\n\r\n.add:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxR0FBcUc7QUFDdkc7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgY29sb3I6ICM1MDlCRjU7XHJcbn1cclxuXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG4gIGNvbG9yOiAjMURCOTU0O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogNXB4IDAgNXB4IDA7XHJcbn1cclxuXHJcbmxpOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwi4pmqXCI7XHJcbiAgY29sb3I6ICMxREI5NTQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW46IDVweCAxNXB4IDE1cHggMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICBjb2xvcjogZ3JleTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEQjk1NDtcclxuICBwYWRkaW5nOiAxMXB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYWRkLC5kZWxldGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYWRkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>\n    Welcome to {{title}} !\n  </h1>\n  <a class=\"login\" [href]=\"authService.authorizeURL\">Login</a>\n</div>\n<div *ngIf=\"playlist\">\n  <h2>⮚ My Playlists</h2>\n  <li *ngFor=\"let item of playlist.items\"><a (click)=\"showTrack(item.id,item.name,item.owner.id)\" target=\"_blank\">{{item.name}}</a>\n  </li>\n  <input #add type=\"text\" (keyup.enter)=\"newPlaylist(add.value)\"><input type=\"submit\" (click)=\"newPlaylist(add.value)\"\n    value=\"ADD PLAYLIST\">\n  <div *ngIf=\"track\">\n    <h3>⮚ Tracks from {{playlistName}}</h3>\n    <li *ngFor=\"let track of track.items\"><a class=\"delete\" (click)=\"removeTrackfromPlaylist(track.track.uri)\"\n        target=\"_blank\">{{track.track.name}} by {{track.track.artists[0].name}}</a></li>\n    <input #searchbar type=\"text\" (keyup.enter)=\"search(searchbar.value)\"><input type=\"submit\"\n      (click)=\"search(searchbar.value)\" value=\"SEARCH TRACK\">\n    <div *ngIf=\"searchTracks\">\n      <h4>⮚ 15 Results for {{searchName}} :</h4>\n      <li *ngFor=\"let search of searchTracks.tracks.items\"><a class=\"add\" (click)=\"addTrackToPlaylist(search.uri)\"\n          title=\"Click to add me on the Playlist\">{{search.name}} by {{search.artists[0].name}}</a></li>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playlist.service */ "./src/app/playlist.service.ts");
/* harmony import */ var _track_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./track.service */ "./src/app/track.service.ts");
/* harmony import */ var _addplaylist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addplaylist.service */ "./src/app/addplaylist.service.ts");
/* harmony import */ var _searchtrack_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchtrack.service */ "./src/app/searchtrack.service.ts");
/* harmony import */ var _addtrack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addtrack.service */ "./src/app/addtrack.service.ts");
/* harmony import */ var _deletetrack_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deletetrack.service */ "./src/app/deletetrack.service.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(authService, PlaylistService, TrackService, addPlaylistService, searchService, addTrackService, deleteTrackService) {
        var _this = this;
        this.authService = authService;
        this.PlaylistService = PlaylistService;
        this.TrackService = TrackService;
        this.addPlaylistService = addPlaylistService;
        this.searchService = searchService;
        this.addTrackService = addTrackService;
        this.deleteTrackService = deleteTrackService;
        this.title = 'MySpotify';
        this.playlistName = localStorage.getItem('playlistName');
        this.searchName = localStorage.getItem('search');
        localStorage.removeItem('ID_Playlist');
        localStorage.removeItem('uri_RemoveTrack');
        localStorage.removeItem('uri_Track');
        localStorage.removeItem('playlistName');
        localStorage.removeItem('search');
        if (localStorage.getItem('token')) {
            this.PlaylistService.getPlaylist().subscribe(function (res) {
                _this.playlist = res;
            });
        }
    }
    AppComponent.prototype.showTrack = function (id, name, clientID) {
        var _this = this;
        localStorage.setItem('ID_Playlist', id);
        localStorage.setItem('playlistName', name);
        localStorage.setItem('Client_ID', clientID);
        this.playlistName = localStorage.getItem('playlistName');
        this.TrackService.getTrack(localStorage.getItem('ID_Playlist')).subscribe(function (res) {
            _this.track = res;
        });
    };
    AppComponent.prototype.search = function (name) {
        var _this = this;
        localStorage.setItem('search', name);
        this.searchName = localStorage.getItem('search');
        this.searchService.searchTrack(localStorage.getItem('search')).subscribe(function (res) {
            _this.searchTracks = res;
        });
    };
    AppComponent.prototype.addTrackToPlaylist = function (uri) {
        var _this = this;
        if (confirm("This track will be added to the above playlist.")) {
            localStorage.setItem('uri_Track', uri);
            this.addTrackService.addTrack(localStorage.getItem('uri_Track'), localStorage.getItem('ID_Playlist'), localStorage.getItem('Client_ID')).subscribe();
            this.TrackService.getTrack(localStorage.getItem('ID_Playlist')).subscribe(function (res) {
                _this.track = res;
            });
        }
    };
    AppComponent.prototype.newPlaylist = function (name) {
        var _this = this;
        this.addPlaylistService.addPlaylist(name, localStorage.getItem('Client_ID')).subscribe();
        this.PlaylistService.getPlaylist().subscribe(function (res) {
            _this.playlist = res;
            alert('You need to reload the page to display the new Playlist.');
        });
    };
    AppComponent.prototype.removeTrackfromPlaylist = function (uri) {
        var _this = this;
        if (confirm("Are you sure you want to delete this track ?")) {
            localStorage.setItem('uri_RemoveTrack', uri);
            this.deleteTrackService.deleteTrack(localStorage.getItem('uri_RemoveTrack'), localStorage.getItem('ID_Playlist'), localStorage.getItem('Client_ID')).subscribe();
            this.TrackService.getTrack(localStorage.getItem('ID_Playlist')).subscribe(function (res) {
                _this.track = res;
            });
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"], _track_service__WEBPACK_IMPORTED_MODULE_4__["TrackService"], _addplaylist_service__WEBPACK_IMPORTED_MODULE_5__["AddplaylistService"], _searchtrack_service__WEBPACK_IMPORTED_MODULE_6__["SearchtrackService"], _addtrack_service__WEBPACK_IMPORTED_MODULE_7__["AddtrackService"], _deletetrack_service__WEBPACK_IMPORTED_MODULE_8__["DeletetrackService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.client_ID = '12ebc58d644148119c27df63ef38fc7d';
        this.redirect_URI = "http://localhost:4200/login";
        this.scopes = 'user-read-private user-read-email playlist-modify playlist-modify-public user-library-read playlist-modify-private';
        this.authorizeURL = "https://accounts.spotify.com/authorize?client_id=" +
            this.client_ID + "&response_type=token&redirect_uri=" +
            this.redirect_URI +
            "&scope=" +
            this.scopes;
    }
    AuthService.prototype.saveToken = function (frags) {
        localStorage.setItem('token', frags.get('access_token'));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var AuthComponent = /** @class */ (function () {
    function AuthComponent(route, authService, router) {
        this.route = route;
        this.authService = authService;
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragments) {
            var res = new URLSearchParams(fragments);
            _this.authService.saveToken(res);
            _this.router.navigate(['/']);
        });
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/deletetrack.service.ts":
/*!****************************************!*\
  !*** ./src/app/deletetrack.service.ts ***!
  \****************************************/
/*! exports provided: DeletetrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletetrackService", function() { return DeletetrackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var DeletetrackService = /** @class */ (function () {
    function DeletetrackService(http) {
        this.http = http;
    }
    DeletetrackService.prototype.deleteTrack = function (uri, id, clientID) {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            body: { "tracks": [{ "uri": uri }] },
            responseType: 'json',
        };
        return this.http.delete('https://api.spotify.com/v1/users/' + clientID + '/playlists/' + id + '/tracks', this.httpOptions);
    };
    ;
    DeletetrackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeletetrackService);
    return DeletetrackService;
}());



/***/ }),

/***/ "./src/app/playlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/playlist.service.ts ***!
  \*************************************/
/*! exports provided: PlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistService", function() { return PlaylistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PlaylistService = /** @class */ (function () {
    function PlaylistService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            responseType: 'json',
        };
    }
    PlaylistService.prototype.getPlaylist = function () {
        return this.http.get('https://api.spotify.com/v1/me/playlists', this.httpOptions);
    };
    ;
    PlaylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlaylistService);
    return PlaylistService;
}());



/***/ }),

/***/ "./src/app/searchtrack.service.ts":
/*!****************************************!*\
  !*** ./src/app/searchtrack.service.ts ***!
  \****************************************/
/*! exports provided: SearchtrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchtrackService", function() { return SearchtrackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var SearchtrackService = /** @class */ (function () {
    function SearchtrackService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            responseType: 'json',
        };
    }
    SearchtrackService.prototype.searchTrack = function (search) {
        return this.http.get('https://api.spotify.com/v1/search?q=' + search + '&type=track&limit=15', this.httpOptions);
    };
    ;
    SearchtrackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchtrackService);
    return SearchtrackService;
}());



/***/ }),

/***/ "./src/app/track.service.ts":
/*!**********************************!*\
  !*** ./src/app/track.service.ts ***!
  \**********************************/
/*! exports provided: TrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackService", function() { return TrackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TrackService = /** @class */ (function () {
    function TrackService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }),
            responseType: 'json',
        };
    }
    TrackService.prototype.getTrack = function (id) {
        return this.http.get('https://api.spotify.com/v1/playlists/' + id + '/tracks', this.httpOptions);
    };
    ;
    TrackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrackService);
    return TrackService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/Coding_Academy/MySpotify/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map