import { NgModule } from '@angular/core';
import { WorktimeCreateComponent } from './worktime-create.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WorktimeCreateComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorktimeCreateComponent
      }
    ])
  ]
})
export class WorktimeCreateModule { }
