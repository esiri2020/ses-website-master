import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-solution-features',
  templateUrl: './solution-features.component.html',
})
export class SolutionFeaturesComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
