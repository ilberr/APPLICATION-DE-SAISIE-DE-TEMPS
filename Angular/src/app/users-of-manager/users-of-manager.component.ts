import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-users-of-manager',
  templateUrl: './users-of-manager.component.html',
  styleUrls: ['./users-of-manager.component.scss']
})
export class UsersOfManagerComponent implements OnInit {

  public users:User[]=[];
  constructor(
    private http:HttpClient,
    private managerService:ApiService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    return this.managerService.getAll().subscribe(
      (res:User[])=>{
        this.users = res;
      },
      (err:HttpErrorResponse)=>{
        alert(err.message)
      }
    )
  }

}
