import { UserDataService } from './../user-data.service';
import { RepoService } from './../repo.service';
import { Repos } from './../repos';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
user:User[];
myRepo:Repos;
  constructor(public serviceUser:UserDataService, public serviceRepo:RepoService) { }
getSearchedUser(searchTerm){
  this.serviceUser.searchUser(searchTerm).then(
    (success) =>{
      this.user = this.serviceUser.user;
    },
    (error)=>{ 
      console.log(error);
    }
  );
  this.serviceRepo.getRepo(searchTerm).subscribe(
    (success)=>{
      this.myRepo=success
      return(this.myRepo)
        // console.log(this.myRepo)
    
      }
     
  )
}
  ngOnInit(): void {
    this.getSearchedUser('Kerrykogei24');
  }

}
