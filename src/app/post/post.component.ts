import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  isLoading = true;

  constructor(private _postService: PostService) {
    this._postService.createPost({userId:1, title:'a', body:'b'})
      .subscribe(post => console.log(post));
  }

  ngOnInit(): void {
    this._postService.getPosts()
      .then(posts => {
        this.isLoading = false;
        console.log(posts[0].id)
      });
  }

}
