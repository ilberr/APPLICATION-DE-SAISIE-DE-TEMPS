import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Register } from '../model/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: any = {
    Firstname: null,
    Lastname: null,
    username: null,
    password: null,
    email: null,
    role: null
  };
  validSignup = false;
  error='';
  roleid: any;
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    window.localStorage.removeItem('token');
  }
  public onRegister(signUpForm: NgForm){
    this.apiService.signUp(signUpForm.value).subscribe(
      (response:Register)=>{
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
      )
  }
  public goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }


  /*onSubmit() {
    const { Firstname, Lastname, username, password, email, role } = this.form;

    this.authenticationService.register(this.form).subscribe({
      next: data => {
        this.validSignup=true;
      },
      error: err => {
        this.error = err.error.message;
    }
    });
    
  }*/


}
