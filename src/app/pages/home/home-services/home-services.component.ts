import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-home-services',
  templateUrl: './home-services.component.html',
})
export class HomeServicesComponent implements OnInit {
  @Input() services: any[] = [
    {
      title: 'Anti-Money Laundering',
      description: 'SES partners with you to intensify Anti Money Laundering, by rendering kYC services, CDD and Tax regulation servicez.',
      tag: 'Compliance System'
    },
    {
      title: 'Anti-Fraud',
      description: 'Secure your customer details with our Cyber security measures, SES is tested and trusted for guarding against cyber theft.',
      tag: 'Compliance System'
    },
    {
      title: 'Enterprise Information & Digital Process Automation',
      description: 'Through the ECM function, we help your business obtain, organize, store and deliver critical information to employees, business stakeholders and customers.',
      tag: 'Compliance System'
    },
    {
      title: 'Onboarding & Client Life Cycle Management',
      description: 'Our adaptive case manager is a business platform that automates business processes, enabling efficient completion of work.',
      tag: 'Compliance System'
    },
    {
      title: 'Adaptive Case Manager',
      description: 'Our adaptive case manager is a business platform that automates business processes, enabling efficient completion of work.',
      tag: 'Compliance System'
    },
    {
      title: 'Kiosk Self Service',
      description: 'An e-support machine that helps you get data & perform tasks without need for direct humans',
      tag: 'Self Service Solution'
    },
    {
      title: 'Smart POS Service',
      description: 'We offer SMART POS devices with advanced capabilities.',
      tag: 'Self Service Solution'
    },
    {
      title: 'ATM Service',
      description: 'We design, deploy and repair ATMs. We enhance the operation of ATMs.',
      tag: 'Self Service Solution'
    },
    {
      title: 'Mobile Banking Applications',
      description: 'We offer communication security: Whether in-store payments, eCommerce in-app payments, we simplify the authentication process, protect card data and safeguard keys and tokens.',
      tag: 'Application Security'
    },
    {
      title: 'Web Banking Applications',
      description: 'Our Web Applications Security Component Reduces Risk,while providing optimal user experience. We secure apps on-premises and in the cloud',
      tag: 'Application Security'
    },
    {
      title: 'Payment Solutions',
      description: 'A leading provider of payment technology and software globally, we help you exceed customer expectations by Digitizing your payment infrastructure.',
      tag: ''
    },
    {
      title: 'Power Solutions',
      description: 'We give you uninterrupted power supply, power backup solutions ( stabilizers, AVRs, inverters), alternative energy systems and power supply like solar powered street lights, energy audit and power cleanup services.',
      tag: ''
    },
    {
      title: 'Applications Development',
      description: 'Our expertise across industries helps us to develop an deploy web and mobile solutions tailored to your needs.',
      tag: ''
    }
  ];


  complianceFilter = (x: any): boolean => x.tag === 'Compliance System';
  selfFliter = (x: any): boolean => x.tag === 'Self Service Solution';
  securityFilter = (x: any): boolean => x.tag === 'Application Security';
  plainFilter = (x: any): boolean => x.tag === '' || x.tag === undefined;

  constructor() { }

  ngOnInit(): void {
  }


}
