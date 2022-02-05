import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { th } from 'date-fns/locale';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Time } from '../entity';
import { CalendarView } from 'angular-calendar';


@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  constructor(
    private employeeService:EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAllTimes()
    
  }
  getAllTimes():void{
    this.employeeService.getAllTimes().subscribe(
      (res:Time[])=>{
        console.log(res)
      },
      (err:HttpErrorResponse)=>{
        alert(err.message)
      }
    )
  }
}
