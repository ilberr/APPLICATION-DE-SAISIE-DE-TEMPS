import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Time } from '../model/user.model';
import { Observable } from "rxjs/index";
import { Register, User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  public getUser() : Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/`);
  }

  public editProfileUser(user: User) : Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/user/edit-profile`,user);
  }

  public choosePorj(time: Time) : Observable<Time> { 
    return this.http.post<Time>(`${this.baseUrl}/user/choose-proj`,time);
  }


  public login(login: Login):Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`,
    {params: {
      username: login.username,
      password: login.password
    }})

  }

  public signUp(register: Register):Observable<Register> {
    return this.http.post<Register>(`${this.baseUrl}auth/`,register)

  }

  getUsers() : Observable<any> {
    return this.http.get(this.baseUrl + 'all-users');
  }
  public getToken(): string {
    return sessionStorage.getItem('TOKEN') || '';
  }
  logout():void {
    window.sessionStorage.clear();
  }


  
}
