import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ses-career-info',
  templateUrl: './career-info.component.html',
})
export class CareerInfoComponent implements OnInit {

  @Input() job: any;

  constructor() { }

  ngOnInit(): void {
  }

}
