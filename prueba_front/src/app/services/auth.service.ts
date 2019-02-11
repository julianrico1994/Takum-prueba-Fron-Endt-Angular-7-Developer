import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private htttp: HttpClient) { }

  loginuser(email: string, password: string): Observable<any> {
    const URL_API = 'http://127.0.0.1:8000/user/auth';
    return this.htttp
      .put(URL_API, { email, password })
      .pipe(map(data => data));
  }

  setUser(user): void {
    const USER_STRING = JSON.stringify(user);
    localStorage.setItem('currentUser', USER_STRING);
  }

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getCurrentUser() {
    const USER_STRING = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(USER_STRING)) {
      const user = JSON.parse(USER_STRING);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    // const accessToken = localStorage.getItem('accessToken');
    // const URL_API = ``;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    // return this.htttp.post(URL_API, { headers: this.headers });
  }
}
