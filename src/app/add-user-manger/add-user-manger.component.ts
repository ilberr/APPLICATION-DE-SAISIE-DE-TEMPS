import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project, User } from '../entity';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-user-manger',
  templateUrl: './add-user-manger.component.html',
  styleUrls: ['./add-user-manger.component.css']
})
export class AddUserMangerComponent implements OnInit {

  constructor(
    private managerService:ManagerService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(usertForm:NgForm):void{
    this.managerService.addUserAdmin(usertForm.value).subscribe(
      (res:User)=>{
        console.log(res)
        alert("User CREATED")
        this.router.navigate(['/manager'])
      },
      (err:HttpErrorResponse)=>{
        console.log(err.message)
      }
    )
  }

}
