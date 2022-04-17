import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-home-hero',
  templateUrl: './home-hero.component.html',
})
export class HomeHeroComponent implements OnInit {
  @Input() qoutes: any[] = [];
  @Input() clients: any[] = [];
  @Input() hero = '';
  @Input() description = '';
  constructor() { }

  ngOnInit(): void {
  }

}
