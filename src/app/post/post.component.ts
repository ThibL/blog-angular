import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../Interfaces/post';
import {PostService} from '../post.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  showError = false;

  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
  }

  deletePost(id: number): any {
    this.postService.deletePost(id).subscribe((data: any) => {
      window.location.reload();
    });
  }

  getColor(post: Post): string {
    return post.loveIts >= 500 ? 'Lightblue' : 'lightCoral';
  }

  onLikePost(post: Post): any {
    post.loveIts += 1;
    const newPost = {...post};
    this.postService.unlike(post.id, newPost).subscribe();
  }

  onUnlikePost(post: Post): any {
    if (post.loveIts > 0) {
      post.loveIts -= 1;
      const newPost = {...post};
      return this.postService.unlike(post.id, newPost).subscribe();
    } else {
      this.showError = true;
    }
  }
}
