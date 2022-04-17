import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {

  heroTitle = 'Page not Found!';
  heroDesp = 'The page you’re looking for might have been removed, have it;s name changed or currently unavailable';

  constructor() { }

  ngOnInit(): void {
  }

}
