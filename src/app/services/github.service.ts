import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
  private username:string;
  private client_id = 'e5a309f29e1552f235a5';
  private client_secret = '1578a534946934a6d3d0b8ffe79ab4356b549673';

  constructor(private _http: Http){
    console.log('Github Service Ready...');
    this.username = 'bradtraversy';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }
}
