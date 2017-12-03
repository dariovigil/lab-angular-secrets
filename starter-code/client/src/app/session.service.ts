import { User } from './models/user.model';
import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SessionService {
  username:string = '';
  secret:string = '';
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  signup(user: User) {
    return this.http.post(`${this.baseUrl}/api/signup`, user)
  }


  login(info: any) {
    return this.http.post(
      this.baseUrl + '/api/login',
      info
    )
  }


  updateInfo(data: any) {
  this.username = data.username;
  this.secret = data.secret;
}

}
