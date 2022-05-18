import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      }
    ])
  ]
})
export class UsersModule { }
