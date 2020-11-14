import { environment } from './../environments/environment';
import { Repos } from './repos';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user:User[]=[];
  repo:Repos[]=[];

  apiURL= 'https://api.github.com/users/';
  token=`?access_token=${environment.apiKey}`

  constructor(private http:HttpClient) { }

  searchUser(searchTerm:string){
    interface data{
      login:string;
      avatar_url:string;
      following :string;
      followings :string;
      public_repos:string;
      name:any;
      company:any;
      location:any;
      followers:any;
      logged_at:Date;
      email:any;
      bio:any;
      created_at:Date;
    }



    return new Promise((resolve,reject)=>{

      this.user=[];

      this.http.get<data>(this.apiURL+ searchTerm + this.token).toPromise().then(
        (results) =>{
         this.user.push(results);
          resolve();
           },
            (error)=>{
              reject();
        }

      );
    
    });
  
  }

}
