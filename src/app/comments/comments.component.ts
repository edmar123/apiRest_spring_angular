import { CommentsService } from './comments.service';
import { Component, OnInit } from '@angular/core';
import { Comment } from "./commets.modelo";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Comment[] ;
  constructor(private commentsService : CommentsService) { }

  ngOnInit() {
    this.commentsService.getCommets().subscribe(comments => this.comments = comments);
  }

}
