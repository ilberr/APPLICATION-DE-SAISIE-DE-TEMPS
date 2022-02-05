import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project, Register, User } from './entity';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private apiServerUrl = environment.apiBaseUrl+"/manager/"+localStorage.getItem("token");

  constructor(private http:HttpClient) { }

  public getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/users-of-manager`);
  }

  public getAllProjects():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.apiServerUrl}/projects`);
  }

  public addUserAdmin(register:Register):Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/add-user`,register)
  }

  public createProject(project:Project){
    return this.http.post<Project>(`${this.apiServerUrl}/create-projet`,project)
  }

  public getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(`${this.apiServerUrl}/projects`)
  }
}
