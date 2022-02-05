import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddUserMangerComponent } from './add-user-manger/add-user-manger.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { AuthcomponentComponent } from './authcomponent/authcomponent.component';
import { ChoixProjetComponent } from './choix-projet/choix-projet.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ProjectsManagerComponent } from './projects-manager/projects-manager.component';
import { TimesComponent } from './times/times.component';
import { UsersMangerComponent } from './users-manger/users-manger.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'signup', component: AuthcomponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', 
    component: AdminDashboardComponent,
    children : [
      {path: 'users', component: AllUsersComponent, pathMatch: 'full'},
      {path: 'users/:id', component: AllUsersComponent, pathMatch: 'full'},
      {path: 'add-user', component: AddUserComponent, pathMatch: 'full'},
      {path: 'add-project', component: AddProjectComponent, pathMatch: 'full'}
    ]
  },
  { path: 'manager', component: ManagerDashboardComponent ,
    children: [
      {path: 'create-project', component:AddProjectComponent},
      {path: 'add-user', component:AddUserMangerComponent},
      {path: 'users', component:UsersMangerComponent},
      {path: 'projects', component:ProjectsManagerComponent}
    ]
  },
  { path: 'employee', component: EmployeeDashboardComponent ,
    children: [
      {path: 'add-time', component: ChoixProjetComponent},
      {path: 'times', component: TimesComponent}
    ]  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AuthcomponentComponent, 
                                  LoginComponent,
                                  AdminDashboardComponent,
                                  ManagerDashboardComponent,
                                  EmployeeDashboardComponent,
                                  AllUsersComponent,
                                  AddUserComponent,
                                  AddProjectComponent,
                                  AddUserMangerComponent,
                                  UsersMangerComponent,
                                  ProjectsManagerComponent,
                                  ChoixProjetComponent,
                                  TimesComponent
                                  ]