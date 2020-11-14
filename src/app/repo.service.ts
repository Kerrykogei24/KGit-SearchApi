import { Repos } from './repos';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  repo:Repos[]=[];
  apiURL= 'https://api.github.com/users/';
  token=`?access_token=${environment.apiKey}`

  constructor(public http:HttpClient) { }

  getRepo(searchTerm:string):Observable<any>{
    return this.http.get(this.apiURL + searchTerm+ '/repos'+ this.token);
  }
}
