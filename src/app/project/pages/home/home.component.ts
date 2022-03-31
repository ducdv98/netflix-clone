import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false,
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2',
      customStyle: {
        color: '#fff',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
