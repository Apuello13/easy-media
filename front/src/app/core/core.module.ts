import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {CreatePostComponent} from './pages/create-post/create-post.component';
import {PostComponent} from './pages/post/post.component';
import {LayoutComponent} from './components/layout/layout.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HeaderComponent,
    CreatePostComponent,
    PostComponent,
    LayoutComponent
  ],
    imports: [
        SharedModule,
        NgOptimizedImage
    ]
})
export class CoreModule { }
