import { NgModule } from '@angular/core';
import { ProjectCreateComponent } from './project-create.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectCreateComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectCreateComponent
      }
    ])
  ]
})
export class ProjectCreateModule { }
