import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register, User } from './entity';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiServerUrl = environment.apiBaseUrl+"/admin/"+localStorage.getItem("token");

  constructor(private http:HttpClient) { }

  public getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/all-users`);
  }

  public addUserAdmin(register:Register):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/add-user`,register)
  }

  public deleteUser(username:string):Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/delete/${username}`)
  }

  public getOne(id:number):Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/user/details/${id}`)
  }

  public getManagers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/managers`)
  }
}
