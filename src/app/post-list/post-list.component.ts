import { Component, OnInit } from '@angular/core';
import { Post } from '../Model/post.model';
import { PostService } from '../services/post-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  listPost:Post[]=[];
  listPostSubscription: Subscription;
  lastUpdate:Date;
  updateSubcription:Subscription;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.listPostSubscription=this.postService.postsSubject.subscribe((postList:Post[])=>{
      this.listPost=postList;
    });   
    this.postService.emitPosts();
  }

}
