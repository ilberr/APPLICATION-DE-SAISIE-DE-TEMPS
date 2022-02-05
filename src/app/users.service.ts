import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register, User } from './entity';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiServerUrl =environment.apiBaseUrl+"/admin/"+localStorage.getItem("token");

  constructor(private http:HttpClient) {}


}
