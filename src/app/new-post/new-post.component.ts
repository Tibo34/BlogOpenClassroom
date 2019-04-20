import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../Model/post.model';
import { PostService } from '../services/post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private postService:PostService,private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm=this.formBuilder.group({
      title:['',Validators.required],
      content:['',Validators.required]
    });
  }

  onSubmitForm(){
    const formValue=this.postForm.value;
    const post=new Post();
    post.title=formValue['title'];
    post.content=formValue['content'];
    post.loveIts=0;
    post.created_at=new Date();
    post.date=post.created_at.toDateString();
    console.log(post);    
    this.postService.newPost(post);
    this.router.navigate(['/']);
  }


}
