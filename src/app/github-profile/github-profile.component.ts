import { Component, OnInit } from '@angular/core';
import { GithubService } from "app/github.service";
import	'rxjs/add/observable/forkJoin';
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  isLoading=true;
  username="octocat";
  user={};
  followers=[];

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    Observable.forkJoin(
      this._githubService.getUser(this.username),
      this._githubService.getFollowers(this.username)
    )
    .subscribe(
      res => {
        this.user = res[0];
        this.followers = res[1];
      },
      null,
      () => { this.isLoading = false;}
    );
  }

}
