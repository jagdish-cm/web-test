import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  public mySubjec : Subject<any> = new Subject();

  constructor( private http : HttpClient) { }

  getUsers() : Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
