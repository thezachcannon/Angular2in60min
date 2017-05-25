import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService{
  constructor(private http: Http){
    console.log('Message Service Initialized');
  }
  getPosts(){
    return this.http.get('http://localhost:3001')
    .map(res => res.json());
  }
}