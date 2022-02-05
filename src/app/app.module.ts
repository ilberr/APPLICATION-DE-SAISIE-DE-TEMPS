import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterService } from './register.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { HomeComponent } from './home/home.component';
import { UsersService } from './users.service';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddUserMangerComponent } from './add-user-manger/add-user-manger.component';
import { ManagerService } from './manager.service';
import { UsersMangerComponent } from './users-manger/users-manger.component';
import { AgGridModule } from 'ag-grid-angular';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProjectsManagerComponent } from './projects-manager/projects-manager.component';
import { ChoixProjetComponent } from './choix-projet/choix-projet.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TimesComponent } from './times/times.component';
import { AdminService } from './admin.service';
import { EmployeeService } from './employee.service';
//import { AuthcomponentComponent } from './authcomponent/authcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    AdminDashboardComponent,
    ManagerDashboardComponent,
    EmployeeDashboardComponent,
    AllUsersComponent,
    HomeComponent,
    AddUserComponent,
    AddProjectComponent,
    UsersMangerComponent,
    UserDetailsComponent,
    ProjectsManagerComponent,
    ChoixProjetComponent,
    TimesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [RegisterService,AdminService,UsersService,EmployeeService,ManagerService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
