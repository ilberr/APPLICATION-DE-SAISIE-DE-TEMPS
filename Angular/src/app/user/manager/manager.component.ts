import { Component, Input, OnInit } from '@angular/core';
import { startOfDay, endOfDay, format} from 'date-fns';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  deleteEvent(work:any){
    //this.workspaces
    console.log("delete")

  }
  addEvent(){
    
  }

  printPDF(work:any){
    console.log("printPDF")
  }
  workspaces: any[] = [
    {
      userId: 123456789,
      name: 'Jack',
      project: 'project01',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd HH:mm'),
      period: '4 months',
      employees: ['Jack', 'Tom']
    },
    {
      userId: 123456789,
      name: 'Jack',
      project: 'project02',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd HH:mm'),
      period: '3 months',
      employees: ['Jack', 'Tom', 'Tony']
    },
    {
      userId: 123456789,
      name: 'Jack',
      project: 'project03',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd HH:mm'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd HH:mm'),
      period: '1 months',
      employees: ['Jack']
    },
  ];
}
