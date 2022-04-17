import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ses-career-form',
  templateUrl: './career-form.component.html',
})
export class CareerFormComponent implements OnInit {

  @Input() jobId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
