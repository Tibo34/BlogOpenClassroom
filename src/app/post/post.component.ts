import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Model/post.model';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post:Post; 

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  like(){
    this.postService.like(this.post);
  }

  dontLike(){
    this.postService.dontLike(this.post);
  }

  removePost(){
    this.postService.removePost(this.post);
  }

}
