import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AddUserComponent } from "./user/add-user/add-user.component";
import { ListUserComponent } from "./user/list-user/list-user.component";
import { EditUserComponent } from "./user/edit-user/edit-user.component";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'add-user', component: AddUserComponent },
  // { path: 'list-user', component: ListUserComponent },
  // { path: 'edit-user', component: EditUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
