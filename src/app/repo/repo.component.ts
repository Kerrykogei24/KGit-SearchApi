import { Repos } from './../repos';
import { RepoService } from './../repo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {


  myRepo:Repos[];
  constructor(public serviceReop:RepoService) { }
getRepo(searchTerm:string){
  this.serviceReop.getRepo(searchTerm).subscribe(data =>{
    this.myRepo=data;
    return(this.myRepo);
  });
}
  ngOnInit() {

    this.getRepo('Kerrykogei24');
  }

}
