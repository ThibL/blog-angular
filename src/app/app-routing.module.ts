import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {SinglePostComponent} from './single-post/single-post.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ContactComponent} from './contact/contact.component';
import {AddPostComponent} from './add-post/add-post.component';

const routes: Routes = [
  { path: '' , redirectTo: 'blog', pathMatch: 'full'},
  { path: 'blog', component: PostListComponent},
  { path: 'blog/:id', component: SinglePostComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'addpost', component: AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
