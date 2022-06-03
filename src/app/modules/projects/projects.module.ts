import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectUpdateComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent
      },
      {
        path: ':id',
        component: ProjectComponent
      },
      {
        path: 'update/:id',
        component: ProjectUpdateComponent
      }
    ])
  ]
})
export class ProjectsModule { }
