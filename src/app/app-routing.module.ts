import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {path:'postList',component:PostListComponent},
  {path:'newPost',component:NewPostComponent},
  {path:'',redirectTo:'postList',pathMatch: 'full'},
  { path: '**', redirectTo: '' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
