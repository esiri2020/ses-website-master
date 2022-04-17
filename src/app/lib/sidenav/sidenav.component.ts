import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ses-sidenav',
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {
  @Input() show = false;
  @Output() closed = new EventEmitter<boolean>();
  @Output() reachoutOpened = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeSidenav(): void {
    this.show = false;
    this.closed.emit(this.show);
  }

  openReachoutCard(): void {
    this.reachoutOpened.emit(true);
  }

}
