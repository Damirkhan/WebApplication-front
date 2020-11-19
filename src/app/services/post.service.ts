import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Post} from '../models/post';

@Injectable({providedIn: 'root'})
export class PostService {
  apiUrl: string = environment.apiUrl + '/api/posts';
  constructor(private http: HttpClient) {
  }
  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + '/add', post);
  }
  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
