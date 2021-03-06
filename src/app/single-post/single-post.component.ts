import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../Interfaces/post';

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
    @Input() post: any;
    editMode = false;

    constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.postService.getPost(id).subscribe((data: any) => {
            this.post = data;
        });
    }



}
