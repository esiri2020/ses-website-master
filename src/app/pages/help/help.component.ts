import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './help.component.html',
})
export class HelpComponent implements OnInit {

  heroTitle = 'Help Desk';
  heroDesp = 'Whatever your need is, we’re here to help. Let us know how we can help you.';
  constructor() { }

  ngOnInit(): void {
  }

}
