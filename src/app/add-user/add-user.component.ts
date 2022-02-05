import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Register, User } from '../entity';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  managers:User[]=[];
  constructor(
    private adminService:AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getManagers();
  }

  public onRegister(signUpForm: NgForm):void{
    this.adminService.addUserAdmin(signUpForm.value).subscribe(
      (response:User)=>{
        console.log(response);
        signUpForm.reset();
        this.router.navigate(['../users'])
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
      )
  }

  public getManagers():void{
    this.adminService.getManagers().subscribe(
      (res:User[])=>{
        this.managers = res;
        console.log(this.managers)
      },
      (err:HttpErrorResponse)=>{
        console.log(err.message)
      }
    )
  }

}
