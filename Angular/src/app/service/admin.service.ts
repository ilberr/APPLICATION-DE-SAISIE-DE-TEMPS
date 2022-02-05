import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project, User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) { }

  public getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users/all`);
  }

  public addUser(user: User) : Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/admin/add-user`,user);
  }

  public updateUser(user: User) : Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/admin/edit-profile`,user);
  }

  public deleteUser(userId: number) : Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/admin/delete-user/${userId}`);
  }

  public usersManager(managerId: number) : Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/admin/users-manager/${managerId}`);
  }

  public editRole(userId: number) : Observable<User> {
    return this.http.patch<User>(`${this.baseUrl}/admin/edit-role/${userId}`, userId);
  }

  public changeAff(managerId: number) : Observable<Project> {
    return this.http.patch<Project>(`${this.baseUrl}/admin/change-affec/${managerId}`, managerId);
  }


}
