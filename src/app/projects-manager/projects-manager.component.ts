import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../entity';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-projects-manager',
  templateUrl: './projects-manager.component.html',
  styleUrls: ['./projects-manager.component.css']
})
export class ProjectsManagerComponent implements OnInit {
  projects:Project[]=[];
  index: number = 0;

  constructor(
    private managerService:ManagerService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll():void{
    this.managerService.getAllProjects().subscribe(
      (res:Project[])=> {
        this.projects = res;
        console.log(res)
      }
    )
  }

}
