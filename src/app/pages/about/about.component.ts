import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  heroTitle = 'Agile and User Centered Culture';
  heroDesp = 'We partner with you to design and develop cost-effective solutions, and promptly';

  constructor() { }

  ngOnInit(): void {
  }

}
