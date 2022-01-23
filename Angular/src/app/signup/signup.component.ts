import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  invalidSignupForm: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    window.localStorage.removeItem('token');
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }
    const loginPayload = {
      username: this.signupForm.controls.username.value,
      password: this.signupForm.controls.password.value
    }
    this.apiService.login(loginPayload).subscribe((data:any) => {
      alert(data.message);
    });
  }


}
