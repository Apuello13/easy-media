import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {PostCardComponent} from "./components/post-card/post-card.component";

@NgModule({
  declarations: [
    PostCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [CommonModule, RouterModule, ReactiveFormsModule, PostCardComponent]
})
export class SharedModule { }
