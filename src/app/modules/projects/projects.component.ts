import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = null;

  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.projectsService.getProjects().subscribe(
      response => {
        this.projects = response;
      },
      error => {
        console.error(error.message)
      }
    );
  }

  navigateToProject(projectId: string): void {
    this.router.navigateByUrl(`/projects/${projectId}`);
  }

}
