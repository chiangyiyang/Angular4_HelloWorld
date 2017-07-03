import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

// import { Observable, Subscription } from "rxjs/Rx";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/mergeMap";

@Component({
    selector: 'spotify-artist-search',
    templateUrl: './spotify-artist-search.component.html',
    styleUrls: ['./spotify-artist-search.component.css']
})
export class SpotifyArtistSearchComponent implements OnInit {
    subscriptopn: Subscription;

    constructor() {
    }

    ngOnInit() {

        var el;
        el = $("#search");

        var keyups = Observable.fromEvent(el, "keyup")
            .map((e: any) => e.target.value)
            .filter(text => text.length >= 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(searchTerm => {
                // var url = "https://api.spotify.com/v1/search?type=artist?q=" + searchTerm;
                var url = "https://api.github.com/users/" + searchTerm + "/followers";
                var promise = $.getJSON(url);
                return Observable.fromPromise(promise);
            });

        this.subscriptopn = keyups.subscribe(data => this.showSearchResult(data));




        // var debounced= _.debounce( function(text){
        //     var url = "https://api.spotify.com/v1/search?type=artist?q=" + text;
        //     $.getJSON(url, function(artists){
        //         console.log(artists);
        //     });
        // }, 400);

        // $("#search").keyup( function(e){

        //     var text = (e.target as HTMLInputElement).value;

        //     if(text.length < 3)
        //         return;

        //     debounced(text);

        // });

    }

    showSearchResult(result){
        console.log(result);
        // this.subscriptopn.unsubscribe();
    }

}
