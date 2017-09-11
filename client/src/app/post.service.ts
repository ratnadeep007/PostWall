import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Post} from './post';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getPosts(){
    return this.http.get('http://localhost:3000/api/getposts')
    .map(res=>res.json());
  }

  addPost(newPost){
    var headers = new Headers();
    headers.append('Content-Type','application/json' );
    return this.http.post('http://localhost:3000/api/pushpost', newPost, {headers:headers})
    .map(res=>res.json());
  }

  deletePost(id){
    return this.http.delete('http://localhost:3000/api/getposts/'+id)
    .map(res=>res.json());
  }
}
