import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private htttp: HttpClient) { }

  loginuser(email: string, password: string): Observable<any> {
    const url_api = "http://127.0.0.1:8000/user/auth";
    return this.htttp
      .put(url_api, { email, password })
      .pipe(map(data => data));
  }

  setUser(user): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser() {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    // return this.htttp.post(url_api, { headers: this.headers });
  }
}
