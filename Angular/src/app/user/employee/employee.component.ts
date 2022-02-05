import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project, User, Time } from 'src/app/model/user.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  user: User;
  project: Project;
  time: Time;

  @Input()
  isEmployee = true;

  @Output()
  employeeChange = new EventEmitter<boolean>();

  constructor(public apiService: ApiService) {}

  ngOnInit(): void {
  }

  getUser(): void{
    this.apiService.getUser().subscribe(
      (response: User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  getProject(time: Time): void{
    this.apiService.choosePorj(time).subscribe(
      (response: Time) => {
        this.time = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  printPDF(user:User){
    console.log("printPDF")

  }
  formatTime(){
    //format(endOfDay(new Date()), 'yyyy-MM-ddTHH:mm')
  }
}
