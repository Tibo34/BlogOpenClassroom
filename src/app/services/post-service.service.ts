import { Injectable } from '@angular/core';
import { Post } from '../Model/post.model';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService{

  listPost:Post[];
  postsSubject=new Subject<Post[]>();
 
  constructor() { 
    this.getPosts();
  }

  getPosts() {
    firebase.database().ref('/PostList')
      .on('value', (data) => {
          this.listPost = data.val() ? data.val() : [];
          this.listPost.forEach((p)=>{
            p.created_at=new Date(p.date);
          });              
          this.emitPosts();
        }
      );
  }

  updatePost(){
    this.savePosts(); 
    this.emitPosts();
  }

  savePosts() {   
    firebase.database().ref('/PostList').set(this.listPost);   
  } 

  removePost(post:Post){
    let index=this.listPost.findIndex((p)=>{
      return p.id===post.id;
    });
    this.listPost.splice(index,1);
    this.updatePost();
  }
 

  newPost(post:Post){
    this.listPost.push(post);
    this.updatePost();
  }

  emitPosts(){
    this.postsSubject.next(this.listPost);
  } 

  like(post:Post){
    post.loveIts++;
    this.updatePost();   
  }

  dontLike(post:Post){
    post.loveIts--;
    this.updatePost();
  }

  ngOnDestroy() {
    this.postsSubject.unsubscribe();
  }



}
