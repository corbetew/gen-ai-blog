import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    const paramId = this.route.snapshot.paramMap.get('id');
    const id = paramId ? +paramId : 0;
    this.postService.getPostById(id).subscribe(data => {
      this.post = data;
    });
  }
}
