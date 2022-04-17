import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ses-schedule-enquiry',
  templateUrl: './schedule-enquiry.component.html',
})
export class ScheduleEnquiryComponent implements OnInit {

  serviceTitle: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (history.state.title) {
      this.serviceTitle = history.state.title;
    }
    else {
      this.route.params.subscribe((params) => {
        this.serviceTitle = (params.title as string).split('-').join(' ');
      });
    }
  }

}
