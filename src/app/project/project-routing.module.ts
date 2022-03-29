import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AnonymousGuard } from './auth/anonymous.guard';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        canActivate: [AnonymousGuard],
        component: HomeComponent
      },
      {
        path: 'login',
        canActivate: [AnonymousGuard],
        component: SignInComponent
      },
      {
        path: 'browse',
        canActivate: [AuthGuard],
        component: BrowseComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
