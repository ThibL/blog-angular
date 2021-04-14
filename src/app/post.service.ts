import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from './Interfaces/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private SERVER_URL = 'http://localhost:3000';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public createPost(post: any): any {
    return this.httpClient.post(this.SERVER_URL + '/posts', post);
  }

  public getPost(id: string | null): any {
    return this.httpClient.get(this.SERVER_URL + '/posts/' + id);
  }

  public getPosts(): any {
    return this.httpClient.get(this.SERVER_URL + '/posts');
  }

  public unlike(id: number, post: Post): Observable<any> {
    return this.httpClient.put(this.SERVER_URL + '/posts/' + id, post, this.httpHeader);
  }

  public deletePost(id: number): any {
    return this.httpClient.delete(this.SERVER_URL + '/posts/' + id);
  }
}
