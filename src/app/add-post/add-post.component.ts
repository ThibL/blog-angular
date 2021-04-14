import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

export class Post {
  public title?: string;
  public content?: string;
  public loveIts?: number;
  public date?: Date;
}

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  form: any;
  isSubmitted = false;

  model = new Post();

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  public onSubmit(): any {
    if (!this.form.errors) {
      const newPost = {
        title: this.form.title,
        content: this.form.content,
        date: new Date(),
        loveIts: 0
      };
      console.log(newPost);
      this.postService.createPost(newPost).subscribe((data: any) => {
        console.log(data);
      });
      console.log('submitted');
      return this.router.navigate(['/blog']);
    } else {
      console.log(this.form, 'raté');
    }
  }

  get formControls(): any {
    return this.form.controls;
  }

}
