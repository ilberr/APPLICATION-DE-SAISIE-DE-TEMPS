import { Component, OnInit } from '@angular/core';
import { startOfDay, endOfDay, format} from 'date-fns';
//import { CalendarEvent } from 'angular-calendar';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  printPDF(work:any){
    //this.workspaces
    console.log("printPDF")

  }

  refresh(){
    console.log("refresh")
  }
  workspaces: any[] = [
    {
      userId: 123456789,
      name: 'Tom',
      project: 'project01',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      period: '4 months',
      manager: 'Jack'
    },
    {
      userId: 123456789,
      name: 'Tom1',
      project: 'project02',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      period: '4 months',
      manager: 'Jack'
    },
    {
      userId: 123456789,
      name: 'Tom2',
      project: 'project03',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      period: '4 months',
      manager: 'Jack'
    },
  ];

}
