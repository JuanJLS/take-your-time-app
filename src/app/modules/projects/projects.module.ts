import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects.component';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectsComponent
      }
    ])
  ]
})
export class ProjectsModule { }
