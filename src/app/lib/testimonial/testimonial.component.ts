import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-testimonial',
  templateUrl: './testimonial.component.html',
})
export class TestimonialComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
