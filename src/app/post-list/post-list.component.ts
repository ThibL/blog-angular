import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  public posts: any[] | undefined;


  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: any) => {
      this.posts = data;
      console.log(data);
    });

  }

}
