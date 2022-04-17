import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-solution-contact',
  templateUrl: './solution-contact.component.html',
})
export class SolutionContactComponent implements OnInit {

  @Input() data: any;
  @Input() serviceTitle: string;
  @Input() serviceId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
