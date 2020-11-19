import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginUrl: string = environment.apiUrl + '/login';
  apiUrl: string = environment.apiUrl + '/api/users';
  constructor(private http: HttpClient) {
  }
  public login(user: User) {
    return this.http.post(this.loginUrl , user, {responseType: 'text'});
  }

  public currentUser(): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/current', {} );
  }
  public register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + '/register', user).pipe();
  }
}
