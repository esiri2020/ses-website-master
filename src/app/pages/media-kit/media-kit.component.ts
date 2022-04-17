import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './media-kit.component.html',
})
export class MediaKitComponent implements OnInit {

  heroTitle = 'Get everything you need to know about us';
  heroDesp = 'If you’re planning to do a media coverage, this is your digital collateral, packaged in an electronic press kit.';
  constructor() { }

  ngOnInit(): void {
  }

}
