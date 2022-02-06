import { Component, OnInit } from '@angular/core';
import { startOfDay, endOfDay, format} from 'date-fns';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AdminService } from 'src/app/service/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public apiService: ApiService,public Adminservice: AdminService,private router: Router) { }
  public users: User[] ;
  public user: User= <User>{};
  public edituser: User;

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void{
    this.Adminservice.getUsers().subscribe(
      (response: User[])  => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }
  public editUser(user: User): void {
    this.Adminservice.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public addUser(addForm: NgForm): void {
    document.getElementById('add-user-form')!.click();
    this.Adminservice.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onOpenModal(user: User= <User>{}, mode: string): void {
    const container = document.getElementById('main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.edituser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    container!.appendChild(button);
    button.click();
  }

  

  

  logout() {
    this.apiService.logout()

  }
  addEvent(){
    
  }
  delete(user:any){
    
    console.log("delete")

  }
  printPDF(user:any){
    console.log("printPDF")
  }}
  
