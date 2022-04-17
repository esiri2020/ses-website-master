import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-home-metrics',
  templateUrl: './home-metrics.component.html',
})
export class HomeMetricsComponent implements OnInit {

  @Input() data: any[] = [
    {
      type: 'time',
      value: 5,
      title: 'Quick Update'

    },
    {
      type: 'rank',
      value: 3,
      title: 'Business Ranking'

    },
    {
      type: 'percentage',
      value: 90,
      title: 'Delivery Percentage'

    },
    {
      type: 'count',
      value: 10000,
      title: 'Delivery Count'

    }
  ];

  countUpOptions: any = {
    duration: 0.8,
    useEasing: false
  };
  constructor() { }

  ngOnInit(): void {
  }

}
