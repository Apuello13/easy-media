import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostComponent } from './pages/post/post.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CreatePostComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
