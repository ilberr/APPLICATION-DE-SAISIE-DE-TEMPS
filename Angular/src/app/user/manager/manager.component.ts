import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { startOfDay, endOfDay, format} from 'date-fns';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  token:string='';

  constructor(private router:Router, private registerService: ApiService) { }

  ngOnInit(): void {
    console.log(localStorage);
  }

  deleteEvent(work:any){
    //this.workspaces
    console.log("delete")

  }
  addEvent(){
    
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

  printPDF(work:any){
    console.log("printPDF")
  }

}
