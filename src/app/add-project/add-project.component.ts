import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from '../entity';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(
    private managerService:ManagerService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onAddProject(projectForm:NgForm){
    return this.managerService.createProject(projectForm.value).subscribe(
      (res:Project)=>{
        alert('Project Created!!')
        console.log(res)
        this.router.navigate(['manager'])
      }
    )
  }

}
