import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../entity';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-authcomponent',
  templateUrl: './authcomponent.component.html',
  styleUrls: ['./authcomponent.component.css']
})
export class AuthcomponentComponent implements OnInit {

  constructor(private registerService:RegisterService,private router:Router){}

  ngOnInit(): void {
  }

  public onRegister(signUpForm: NgForm){
    this.registerService.signUp(signUpForm.value).subscribe(
      (response:Register)=>{
        console.log(response);
        signUpForm.reset();
        this.router.navigate(['login'])
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
      )
  }

}
