import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8080/api';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<any> {
    console.log('test');
    console.log(email, password);
    return this.http.post(AUTH_API + '/auth', {
      email,
      password
    });
  }

  public register(user: any): Observable<any> {
    return this.http.post(AUTH_API + '/users', {
      name: user.name,
      email: user.email,
      password: user.password,
    }, httpOptions);
  }
}
