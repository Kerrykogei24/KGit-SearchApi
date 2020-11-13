import { Repos } from './repos';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';



@Injectable({
  providedIn: 'root'
})
export class UserDataService {
user:User[]=[];
repo:Repos[]=[];
  constructor(private http:HttpClient) { }

  searchUser(searchTerm:string){
    interface data{
      login:string;
      avatar_url:string;
      following :string;
      followings :string;
      public_repos:string;

    }



    return new Promise((resolve,reject)=>{
      this.user=[];

      this.http.get<data>(this.)
    })
  }
}
