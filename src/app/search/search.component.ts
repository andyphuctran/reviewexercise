import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() textChange = new EventEmitter();
  constructor() { }
  
  ngOnInit() {
  }
  searchText(value:string){
    this.textChange.emit(value);
  }
}
