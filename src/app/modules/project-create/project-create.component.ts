import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  form: FormGroup | undefined;

  constructor(private fb: FormBuilder, private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    if (this.form) { return; }
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }
  async createNewProject() {
    const body = {
      name: this.form?.get('name')?.value,
    };

    this.projectsService.createProject(body).subscribe(
      response =>  this.router.navigateByUrl('/projects') ,
      error => alert('Error while creating the Project') 
    );
  }

}
