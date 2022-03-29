import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styles: []
})
export class SvgIconComponent implements OnInit {
  @Input() name!: string;
  @Input() size = 16;
  @Input() fill = 'currentColor';
  window: any = window;

  constructor() {
  }

  get iconUrl() {
    return `${this.window.location.href}#${this.name}`;
  }
  
  ngOnInit() {
  }

}
