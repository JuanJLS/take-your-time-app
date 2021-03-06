import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectsService } from "src/app/services/projects.service";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
    projectId: string = '';
    project: any;
    isEditing: boolean | undefined;

    constructor(private projectService: ProjectsService, private route: ActivatedRoute, private router: Router) { }

    getProject() {
        this.projectService.getProject(this.projectId).subscribe(response => {
            this.project = response;
        },
            error => alert('Error while retrieving the project')
        )
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params['id'];
            this.getProject()
        })
        this.isEditing = false;
    }

    navigateToUpdateProject(projectId: string, projectName: string): void {
        this.router.navigate([`/projects/update/${projectId}`], { queryParams: { name: projectName } });
    }

    deleteProject(projectId: number) {
        this.projectService.deleteProject(projectId).subscribe(response => {
            alert('Project deleted successfuly');
            this.router.navigate(['/projects']);
        },
            error => alert('Imposible to delete the Project')
        )
    }
}