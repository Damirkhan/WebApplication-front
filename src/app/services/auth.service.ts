import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }
  public getToken(): string {
    return localStorage.getItem(environment.tokenKey);
  }
  public setToken(token: string) {
    localStorage.setItem(environment.tokenKey, token);
    console.log(token);
  }
  public logout() {
    localStorage.removeItem(environment.tokenKey);
    console.log('Token Deleted');
  }
  public isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
