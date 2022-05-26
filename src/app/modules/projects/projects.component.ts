import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = null;

  constructor(private projectsService: ProjectsService) { }

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
}
