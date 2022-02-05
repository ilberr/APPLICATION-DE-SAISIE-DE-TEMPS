import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Time, TimeRequest } from './entity';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl+"/user/"+localStorage.getItem("token");

  constructor(private http:HttpClient) { }

  choixProjet(timeRequest: TimeRequest){
    this.http.post<any>(`${this.apiServerUrl}/choose-proj`,timeRequest)
  }

  getAllTimes():Observable<Time[]>{
    return this.http.get<Time[]>(`${this.apiServerUrl}/times/all`)
  }

}
