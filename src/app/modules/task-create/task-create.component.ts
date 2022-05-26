import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {
  form: FormGroup | undefined;
  projects = null;

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router, private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    if (this.form) { return; }
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      projectId: ['', [Validators.required]]
    });
  }

  async createNewTask() {
    const body = {
      name: this.form?.get('name')?.value,
      projectId: this.form?.get('projectId')?.value,
    };

    this.taskService.createTask(body).subscribe(
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

}
