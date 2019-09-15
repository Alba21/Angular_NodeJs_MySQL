import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginServicio {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post('http://localhost:3000/login', {
      nickname: username,
      password: password,     
    });     
  }
}