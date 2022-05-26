import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserCreateComponent } from '../user-create/user-create.component';


@NgModule({
  declarations: [
    UserCreateComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserCreateComponent
      }
    ])
  ]
})
export class UserCreateModule { }
