import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  task: any;
  users: any;
  userIsAdmin: boolean = false;
  user: any;
  currentUserTasks: any[] | undefined;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private projectsService: ProjectsService,
    private tasksService: TaskService,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.currentUserTasks = [];
    this.getProjects();
    this.getUsers();
    this.userService.getCurrentUser().subscribe(response => { 
      this.user = response,
      this.userIsAdmin = response.admin;
      this.getTasks();
    });
  }

  filteredTasksByUser() {
    this.tasks?.forEach((element: any) => {
      element?.WorkTimes?.forEach((subElement: any) => {
        if (subElement.userId === this.user?.id) {
          this.currentUserTasks?.push(element);
        }
      });
    });
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(response => {
      this.projects = response;
    })
  }
  getTasks() {
    this.tasksService.getTasks().subscribe(response => {
      this.tasks = response;
      this.tasks?.map((element: any) => {
        return Object.assign(element, { "timeCalculated": this.calculateWorktimeByTask(element) })
      });
    this.filteredTasksByUser();
    })
  }

  findTaskById(taskId: any) {
    this.tasksService.findTaskById(taskId).then((response: any) => {
      this.task = response;
    })
  }

  getUsers() {
    this.usersService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  calculateWorktimeByTask(task: any): number {
    let calculatedTotalTime: number = 0;
    task.WorkTimes.forEach((workTimes: any) => {
      calculatedTotalTime += workTimes.totalTime;
    });
    const calculatedTime = calculatedTotalTime * 100 / 160;
    return calculatedTime;
  }
  
  navigateTo(element: string, elementId: number): void {
    this.router.navigateByUrl(`/${element}/${elementId}`);
  }
}
