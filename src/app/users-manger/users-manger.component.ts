import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-users-manger',
  templateUrl: './users-manger.component.html',
  styleUrls: ['./users-manger.component.css']
})
export class UsersMangerComponent implements OnInit {
  public users:User[]=[];
  constructor(
    private http:HttpClient,
    private managerService:ManagerService
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
