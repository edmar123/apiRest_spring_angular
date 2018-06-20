

import { Comment } from './commets.modelo';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable()
export class CommentsService {

  constructor(private http: Http) { }

  getCommets(): Observable<Comment[]>{
    return this.http.get("https://jsonplaceholder.typicode.com/comments").map(response => response.json());
  }
}
