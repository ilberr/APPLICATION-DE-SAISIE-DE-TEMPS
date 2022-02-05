import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role, User } from './entity';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserAndRoleService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(public http:HttpClient) {}

  public getLoggedInUser():Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/users/loggedInUserId`);
  }

  public getRoleUser(user:User):Observable<Role>{
    return this.http.get<Role>(`${this.apiServerUrl}/users/getRole/${user.id}`)
  }
}
