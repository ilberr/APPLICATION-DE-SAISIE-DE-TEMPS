import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AdminService } from 'src/app/service/admin.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public apiService: ApiService,public Adminservice: AdminService,private router: Router) { }
  public users: User[];

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void{
    this.Adminservice.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }

  

  

  logout() {
    this.apiService.logout()

  }
  addEvent(){
    
  }
  delete(user:any){
    
    console.log("delete")

  }
  printPDF(user:any){
    console.log("printPDF")
  }}
  /*
  users: any[] = [
    {
      userId: 1,
      name: 'ilham',
      project: 'proj1',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      period: '1 months',
      manager: 'Jack'
    },
    {
      userId: 2,
      name: 'ilber',
      project: 'proj2',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      period: '1 months',
      manager: 'Jack'
    },
];
}*/
