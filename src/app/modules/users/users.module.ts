import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserUpdateComponent
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
      },
      {
        path: 'update/:id',
        component: UserUpdateComponent
      }
    ])
  ]
})
export class UsersModule { }
