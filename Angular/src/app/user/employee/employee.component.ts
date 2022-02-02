import { Component, OnInit } from '@angular/core';
import { startOfDay, endOfDay, format} from 'date-fns';

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
  workspaces: any[] = [
    {
      userId: 123456789,
      name: 'Tom',
      project: 'project01',
      start: format(startOfDay(new Date()), 'yyyy-MM-ddTHH:mm'),
      end: format(endOfDay(new Date()), 'yyyy-MM-ddTHH:mm'),
      period: '4 months',
      manager: 'Jack'
    },
    {
      userId: 123456789,
      name: 'Tom1',
      project: 'project02',
      start: format(startOfDay(new Date()), 'yyyy-MM-ddTHH:mm'),
      end: format(endOfDay(new Date()), 'yyyy-MM-ddTHH:mm'),
      period: '4 months',
      manager: 'Jack'
    },
    {
      userId: 123456789,
      name: 'Tom2',
      project: 'project03',
      start: format(startOfDay(new Date()), 'yyyy-MM-ddTHH:mm'),
      end: format(endOfDay(new Date()), 'yyyy-MM-ddTHH:mm'),
      period: '4 months',
      manager: 'Jack'
    },
  ];

}
