import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    //console.log("get service 10: ", this.http.get<User[]>('https://jsonplaceholder.typicode.com/users'));
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
