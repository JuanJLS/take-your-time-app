import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = null;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.projectsService.getProjects().subscribe(
      response => {
        this.projects = response;
        console.log(this.projects);
      },
      error => {
        console.error(error.message)
      }
    );
  }
}
