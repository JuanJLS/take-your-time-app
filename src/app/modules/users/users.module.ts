import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      },
      {
        path: ':id',
        component: UserComponent
      }
    ])
  ]
})
export class UsersModule { }
