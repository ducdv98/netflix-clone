import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ControlModule } from '../control/control.module';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [ProjectComponent, HomeComponent, BrowseComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ControlModule,
    NzCollapseModule,
    NzIconModule
  ]
})
export class ProjectModule {
}
