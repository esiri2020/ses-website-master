import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ses-schedule-service',
  templateUrl: './schedule-service.component.html',
})
export class ScheduleServiceComponent implements OnInit {

  filterQuery = 'all';

  services: any[] = [
    {
      title: 'Anti-Money Laundering',
      tag: 'Compliance System',
      shape: '/assets/img/svg/shape/shape-aml.svg'
    },
    {
      title: 'Anti-Fraud',
      tag: 'Compliance System',
      shape: '/assets/img/svg/shape/shape-fraud.svg'
    },
    {
      title: 'Enterprise Information & Digital Process Automation',
      tag: 'Compliance System',
      shape: '/assets/img/svg/shape/shape-process.svg'
    },
    {
      title: 'Onboarding & Client Life Cycle Management',
      tag: 'Compliance System',
      shape: '/assets/img/svg/shape/shape-onboarding.svg'
    },
    {
      title: 'Adaptive Case Manager',
      tag: 'Compliance System',
      shape: '/assets/img/svg/shape/shape-case.svg'
    },
    {
      title: 'Kiosk Self Service',
      tag: 'Self Service Solution',
      shape: '/assets/img/svg/shape/shape-kiosk.svg'
    },
    {
      title: 'Smart POS Service',
      tag: 'Self Service Solution',
      shape: '/assets/img/svg/shape/shape-pos.svg'
    },
    {
      title: 'ATM Service',
      tag: 'Self Service Solution',
      shape: '/assets/img/svg/shape/shape-atm.svg'
    },
    {
      title: 'Mobile Banking Applications',
      tag: 'Application Security',
      shape: '/assets/img/svg/shape/shape-mobile.svg'
    },
    {
      title: 'Web Banking Applications',
      tag: 'Application Security',
      shape: '/assets/img/svg/shape/shape-web.svg'
    },
    {
      title: 'Payment Solutions',
      tag: '',
      shape: '/assets/img/svg/shape/shape-payment.svg'
    },
    {
      title: 'Power Solutions',
      tag: '',
      shape: '/assets/img/svg/shape/shape-power.svg'
    },
    {
      title: 'Applications Development',
      tag: '',
      shape: '/assets/img/svg/shape/shape-app.svg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  filterService(query: string): void {

  }
}
