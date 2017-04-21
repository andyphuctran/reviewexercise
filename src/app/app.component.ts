import { Component, Input } from '@angular/core';
import {PostService} from './post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final review exercise!';
  posts:any;
  text:string='';
  @Input() data;
  constructor(private postService:PostService){
    this.postService.getPosts().subscribe(
      response => {this.posts=JSON.parse(response['_body']);
                    this.data=this.posts;},
      error => console.log(error),
      // completed => console.log('Done !')
    );
  }
  onChange(data){
    this.text=data;
  }
}
