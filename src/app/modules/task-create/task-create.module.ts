import { NgModule } from '@angular/core';
import { TaskCreateComponent } from './task-create.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskCreateComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskCreateComponent
      }
    ])
  ]
})
export class TaskCreateModule { }
