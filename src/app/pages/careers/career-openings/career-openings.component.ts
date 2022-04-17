import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ses-career-openings',
  templateUrl: './career-openings.component.html',
})
export class CareerOpeningsComponent implements OnInit {

  @Input() jobs: any[] = [
    {
      title: 'Sales Representative',
      type: 'Full time',
      department: 'IT',
      experienceNeeded: 3,
    },
    {
      title: 'Customer Experience Agent',
      type: 'Full time',
      department: 'IT',
      experienceNeeded: 3,
    },
    {
      title: 'Operations Manager',
      type: 'Full time',
      department: 'IT',
      experienceNeeded: 3,
    },
    {
      title: 'Product Manager',
      type: 'Full time',
      department: 'IT',
      experienceNeeded: 3,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
