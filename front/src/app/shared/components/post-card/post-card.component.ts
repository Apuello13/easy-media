import {Component, Input} from "@angular/core";
import {Post} from "../../models/post";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html'
})
export class PostCardComponent {
  @Input() post!: Post;
  date: Date = new Date();
}
