import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/pages/login/login.component";
import {RegisterComponent} from "./auth/pages/register/register.component";
import {CreatePostComponent} from "./core/pages/create-post/create-post.component";
import {PostComponent} from "./core/pages/post/post.component";
import {LayoutComponent} from "./core/components/layout/layout.component";

const routes: Routes = [
  { path: '', component: LayoutComponent, children:
      [
        { path: 'create-post', component: CreatePostComponent },
        { path: 'my-posts', component: PostComponent },
        { path: 'all-posts', component: PostComponent },
      ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
