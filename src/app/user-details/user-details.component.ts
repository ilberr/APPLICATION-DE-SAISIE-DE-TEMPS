import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../entity';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public user:any;
  constructor(
    private adminService :AdminService
  ) { }

  ngOnInit(): void {
  }

  public getOne(id:number):void{
    this.adminService.getOne(id).subscribe(
      (res:User)=>{
        this.user = res;
        alert(res)
      }
    )
  }
}
