import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { TaskService } from 'src/app/services/task.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  projects: any;
  tasks: any;
  
  constructor(private projectsService: ProjectsService, private tasksService: TaskService, private userService: UsersService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getTasks();
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(response =>{
      this.projects = response ;
    })
  }
  getTasks() {
    this.tasksService.getTasks().subscribe(response =>{
      this.tasks = response ;
    })
  }

}
