import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project, User, Time } from 'src/app/model/user.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  user: User;
  time: Time;
  project: Project;
  token:string='';

  @Input()
  isEmployee = true;

  @Output()
  employeeChange = new EventEmitter<boolean>();

  constructor(public registerService: ApiService, private router:Router) {}

  ngOnInit(): void {
  }


  printPDF(user:User){
    console.log("printPDF")

  }
  formatTime(){
    //format(endOfDay(new Date()), 'yyyy-MM-ddTHH:mm')
  }

  onLogout(){
    this.token = localStorage.getItem("token") || '';
    this.registerService.logout(this.token).subscribe(
      (res:string)=>{
        alert("Logout Successful")
        console.log(res)
        localStorage.clear()
        this.router.navigate(['login'])
      },
      (err:HttpErrorResponse)=>{
        localStorage.clear()
        this.router.navigate(['login'])        
        
      }
    )
  }
}
