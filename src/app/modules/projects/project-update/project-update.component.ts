import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectsService } from "src/app/services/projects.service";

@Component({
    selector: 'app-project',
    templateUrl: './project-update.component.html',
    styleUrls: ['./project-update.component.scss']
})

export class ProjectUpdateComponent implements OnInit {
    projectId: string = '';
    projectName: string = '';
    form: FormGroup | undefined;
    updatedProjectName: string = '';
    projectModified: boolean = false;


    constructor(private projectService: ProjectsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }


    initForms(): void {
        console.log('Iniciando')
        if (this.form) { return; }
        this.form = this.fb.group({
            name: [this.projectName, [Validators.required]]
        });

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params['id'];
        })

        this.route.queryParams.subscribe(params => {
            this.projectName = params['name'];
            this.initForms()
        })
    }

    updateProject() {
        this.projectService.updateProject({ 'id': this.projectId, 'name': this.form?.get('name')?.value }).subscribe(response => {
            this.projectModified = true;
            setTimeout(
                () => this.createNewProjectAndRedirect(), 2000
            )
        },
            error => alert('Error while creating the Task')
        );
    }
    createNewProjectAndRedirect() {
        this.projectModified = false;
        this.router.navigateByUrl('/projects');
    }
}