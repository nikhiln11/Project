import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user: any = null;
  private userSubject = new BehaviorSubject(this._user);
  userObservable = this.userSubject.asObservable();
  createUserSession(user: any) {
    this._user = user;
    localStorage.setItem("USER",JSON.stringify(user));
    this.userSubject.next(this._user);
  }
  logout() {
    this._user = null;
    this.userSubject.next(this._user);
    localStorage.clear();
  }
  constructor(private httpClient: HttpClient) {
this.rehydrate();
  }
  rehydrate() {
    if (localStorage.getItem('USER')) {
      this._user = JSON.parse(localStorage.getItem('USER') as any);
      this.userSubject.next(this._user);
    }
  }
  login(email: string, password: string) {
    const apiKey = 'AIzaSyB1W_dtNf0KHhDGcYG42yDSGVxLXC314oc';
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
      apiKey;
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    // data: any = (this.httpClient.post(url, data));
    return this.httpClient.post(url, data);
  }
}
