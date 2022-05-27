import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { UsersService } from 'src/app/services/user.service';
import { WorktimeService } from 'src/app/services/worktime.service';

@Component({
  selector: 'app-worktime-create',
  templateUrl: './worktime-create.component.html',
  styleUrls: ['./worktime-create.component.scss']
})
export class WorktimeCreateComponent implements OnInit {
  projects: any;
  form: FormGroup | undefined;
  users: any;

  constructor(
    private projectService: ProjectsService,
    private fb: FormBuilder,
    private worktimeService: WorktimeService,
    private router: Router,
    private usersService: UsersService
    ) { }

  ngOnInit(): void {
    this.initForms();
    this.getProjects();
    this.getUsers();
  }

  initForms(): void {
    if (this.form) { return; }
    this.form = this.fb.group({
      projectSelected: ['', [Validators.required]],
      taskId: [, [Validators.required]],
      userId: [, [Validators.required]],
      startedAt: [, [Validators.required]],
      endAt: [, [Validators.required]]
    });
  }
  async createNewWorkTime() {
    const body = {
      taskId: this.form?.get('taskId')?.value.id,
      userId: this.form?.get('userId')?.value.id,
      startedAt: this.form?.get('startedAt')?.value,
      endAt: this.form?.get('endAt')?.value,
    };

    this.worktimeService.createWortime(body).subscribe(
      response => this.router.navigateByUrl('/projects'),
      error => alert('Error while creating the Task')
    );
  }
  getProjects(): void {
    this.projectService.getProjects().subscribe(
      response => {
        this.projects = response;
      },
      error => {
        console.log(error.message)
      }
    )
  }

  getTasks() {
    return this.form?.get('projectSelected')?.value.Tasks;
  }

  getUsers(){
    this.usersService.getUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.log(error.message)
      }
    )
  }
}
