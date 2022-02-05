import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register, User } from './entity';
import { RegisterService } from './register.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'agendafrontapp';
  public users:User[]=[];

  constructor(private registerService:RegisterService){}

  ngOnInit(): void {
    //this.getAll();
  }

  public getAll():void{
    this.registerService.getAll().subscribe(
      (response:User[])=>{
        this.users = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
      )
  }

}

