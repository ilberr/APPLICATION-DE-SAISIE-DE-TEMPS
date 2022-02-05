import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';
import { User } from '../entity';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  public users:User[]=[];
  public managers:User[]=[];
  constructor(
    private usersService:AdminService,
    private router:Router,
    private http:HttpClient,
    private route:ActivatedRoute
  ) { 
    this.route.params.subscribe(params => this.getOne(params['id']))
  }

  ngOnInit(): void {
    this.getAll();
    this.getManagers();
  }

  public getAll():void{
    this.usersService.getAll().subscribe(
      (response:User[])=>{
        console.log(response)
        this.users = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
      )
  }

  public onDelete(username:string):void{
    this.usersService.deleteUser(username).subscribe(
      (res:any)=>{
        console.log(res)
        alert('Usee Deleted!!')
        this.router.navigate(['../admin'])
      }
    )
  }

  public getOne(id:number):void{
    this.usersService.getOne(id).subscribe(
      (res:User)=>{
        console.log(res)
        //alert("User name : "+res.username)
        this.router.navigate(['../admin/users'])
      }
    )
  }

  public getManagers():void{
    this.usersService.getManagers().subscribe(
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
