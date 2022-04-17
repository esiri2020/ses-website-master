import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-career-benefits',
  templateUrl: './career-benefits.component.html',
})
export class CareerBenefitsComponent implements OnInit {
  @Input() benefits: any[] = [
    {
      title: 'We value you.',
      description: 'Enjoy health insurance benefits, annual/paid leave, and disability insurance.',
      tag: 'Personal benefits'
    },
    {
      title: 'Ensuring a secure future.',
      description: 'We schedule a retirement/pension plan just for you and you enjoy a range of other employee benefits.',
      tag: 'Salary benefits'
    },
    {
      title: 'Be a part of creative minds.',
      description: 'SES is a growth inducing environment. Experience exciting opportunities, challenging and rewarding assignments, learning and development.',
      tag: 'Growth & Community'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
