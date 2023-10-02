import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {views} from "../../util/views";
import {View} from "../../models/view";
import {Post} from "../../../shared/models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  isViewPersonalPosts: boolean = true;
  title: string = "";
  allPosts: Post[] = [];
  posts: Post[] = [];
  constructor(private router: Router) {
    this.setView();
  }

  setView(): void{
    const path = this.router.url;
    const findView = views.find(view => view.path === path) ?? this.getEmptyObject();
    const { title, isPersonalPosts } = findView;
    this.title = title;
    this.isViewPersonalPosts = isPersonalPosts;
  }

  getEmptyObject(): View {
    return { path: '', title: '', isPersonalPosts: false };
  }
}
