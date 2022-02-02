import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/user.model';
import {Observable} from "rxjs/index";
import { Register } from '../model/user.model';

const baseUrl = 'http://localhost:8090/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public login(login: Login):Observable<any> {
    return this.http.post<any>(`${baseUrl}/login`,
    {params: {
      username: login.username,
      password: login.password
    }})

  }

  public signUp(register: Register):Observable<Register> {
    return this.http.post<Register>(`${baseUrl}auth/`,register)

  }

  getUsers() : Observable<any> {
    return this.http.get(baseUrl + 'all-users');
  }
  public getToken(): string {
    return sessionStorage.getItem('TOKEN') || '';
  }
  logout():void {
    window.sessionStorage.clear();
  }


  
}
