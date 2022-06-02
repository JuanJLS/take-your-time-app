import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ProjectsService } from "src/app/services/projects.service";

@Component({
    selector: 'app-project',
    templateUrl: './project-update.component.html',
    styleUrls: ['./project-update.component.scss']
})

export class ProjectUpdateComponent implements OnInit {
    projectId: string = '';
    @Input() projectName: string = '';
    form: FormGroup | undefined;
    updatedProjectName: string ='';


    constructor(private projectService: ProjectsService, private route: ActivatedRoute, private fb: FormBuilder) { }

    updateProject() {
        this.projectService.updateProject({'id': this.projectId,'name': this.updatedProjectName}).subscribe(response => {
            console.log('name', this.form?.value.name)
            if(response) {
                alert('Project updated successfuly')
            }
        },
            error => alert('Error while retrieving the project')
        )
    }

    initForms(): void {
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
        })

        this.initForms()
    }

    onUpdateProjectName(event: Event){
        this.updatedProjectName = (<HTMLInputElement>event.target).value;
    }

   
}