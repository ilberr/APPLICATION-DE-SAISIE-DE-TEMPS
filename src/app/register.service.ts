import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin, Register, User } from './entity';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiServerUrl =environment.apiBaseUrl;

  constructor(private http:HttpClient) {}
      /**
     * signUp
  :Observble<any>   */
  public home():Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/`)
  }
  public getAll():Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/users/all`);
  }
  public signUp(register: Register):Observable<Register> {
    return this.http.post<Register>(`${this.apiServerUrl}/auth/`,register)

  }

  public login(login: ILogin):Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/auth/signin`,login)

  }

  public logout(token:string):Observable<any>{
    return this.http.patch<any>(`${this.apiServerUrl}/auth/logout/${token}`,{})
  }
  
}
