import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() newEvent = new EventEmitter();
  search(text:string):void{
    this.newEvent.emit(text);
  }
}
