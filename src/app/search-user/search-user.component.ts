import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
searchTerm:string;

@Output() searchEmitter= new EventEmitter<any>();
  constructor() { }
emmitUser(){
  this.searchEmitter.emit(this.searchTerm);
}
  ngOnInit(){
  }

}
