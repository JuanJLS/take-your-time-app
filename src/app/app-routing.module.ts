import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './modules/users/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: NavigationComponent, canActivate: [AuthGuard], children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
      { path: 'users/create', loadChildren: () => import('./modules/user-create/user-create.module').then(m => m.UserCreateModule) },
      { path: 'projects/create', loadChildren: () => import('./modules/project-create/project-create.module').then(m => m.ProjectCreateModule) },
      { path: 'tasks/create', loadChildren: () => import('./modules/task-create/task-create.module').then(m => m.TaskCreateModule) },
      { path: 'worktime/create', loadChildren: () => import('./modules/worktime-create/worktime-create.module').then(m => m.WorktimeCreateModule) }
    ]
  },
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
