import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee, Manager, Project, User } from 'src/app/model/user.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: Employee;
  manager: Manager;
  project: Project;

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
        this.employee.userId = response.id;
        this.employee.name = response.fullname;
        this.manager.userId = response.manager_id;
        this.project.manager_id = response.manager_id;
        this.employee.project = this.project.title;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }

  printPDF(work:any){
    console.log("printPDF")

  }
  formatTime(){
    //format(endOfDay(new Date()), 'yyyy-MM-ddTHH:mm')
  }
}
