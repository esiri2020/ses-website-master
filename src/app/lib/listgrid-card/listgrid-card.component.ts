import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ses-listgrid-card',
  templateUrl: './listgrid-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListgridCardComponent implements OnInit {

  @Input() type = 'full';
  @Input() hideLink = false;
  @Input() data: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
