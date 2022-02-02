import { Component, OnInit } from '@angular/core';
import { startOfDay, endOfDay, format} from 'date-fns';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.apiService.logout()

  }
  delete(user:any){
    
    console.log("delete")

  }
  users: any[] = [
    {
      userId: 1,
      name: 'ilham',
      project: 'proj1',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      manager: 'Jack'
    },
    {
      userId: 2,
      name: 'ilber',
      project: 'proj2',
      start: format(startOfDay(new Date()), 'yyyy-MM-dd'),
      end: format(endOfDay(new Date()), 'yyyy-MM-dd'),
      manager: 'Jack'
    },
];
}
