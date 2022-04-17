import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './resource-list.component.html',
})
export class ResourceListComponent implements OnInit {

  page = 'all';
  heroTitle = 'Resources';
  heroDesp = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      if (data.type) {
        this.page = data.type;
      }
    });
  }

}
