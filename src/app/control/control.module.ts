import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgDefinitionsComponent } from './svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';

@NgModule({
  declarations: [SvgDefinitionsComponent, SvgIconComponent],
  imports: [
    CommonModule
  ]
})
export class ControlModule { }
