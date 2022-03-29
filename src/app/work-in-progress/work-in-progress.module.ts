import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkInProgressComponent } from './work-in-progress.component';
import { WorkInProgressRoutingModule } from './work-in-progress-routing.module';

@NgModule({
  declarations: [WorkInProgressComponent],
  imports: [
    CommonModule,
    WorkInProgressRoutingModule
  ]
})
export class WorkInProgressModule {
}
