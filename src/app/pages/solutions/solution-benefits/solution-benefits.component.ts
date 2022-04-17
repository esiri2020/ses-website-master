import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-solution-benefits',
  templateUrl: './solution-benefits.component.html',
})
export class SolutionBenefitsComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
