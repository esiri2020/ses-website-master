import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ses-schedule',
  templateUrl: './schedule.component.html',
})
export class ScheduleComponent implements OnInit {

  heroTitle = 'How can we be of service to you?';
  heroDesp = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.';

  constructor() { }

  ngOnInit(): void {
  }
}
