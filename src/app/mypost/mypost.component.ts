import { Component, OnInit, Input } from '@angular/core';
// import {PostService} from '../post.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  @Input() data:any;
  constructor() {
   }

  ngOnInit() {
  }

}
