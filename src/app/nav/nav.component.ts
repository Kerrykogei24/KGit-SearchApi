import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  searchTerm:string;

  @Output() searchEmitter= new EventEmitter<any>();
    constructor() { }
  emmitUser(){
    this.searchEmitter.emit(this.searchTerm);
  }
    ngOnInit(){
    }
  
  }