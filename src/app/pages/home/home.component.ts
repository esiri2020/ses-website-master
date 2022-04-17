import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  partnerQoutes: any[] = [
    {
      name: 'Joy Pearl Okie',
      role: 'Product Manager',
      company: 'Intelia',
      image: 'http://localhost:4200/assets/img/png/customers/customer-1.png',
      qoute: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      name: 'Mary Jane Grace',
      role: 'DevOps',
      company: 'Intelia',
      image: 'http://localhost:4200/assets/img/png/customers/customer-2.png',
      qoute: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
  ];
  heroTitle = 'The Simplier, Structured Solution';
  heroDesp = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.';
  heroClients: any[] = [
    {
      name: 'Shell',
      image: 'http://localhost:4200/assets/img/png/partners/color-white/shell.png'
    },
    {
      name: 'Chevron',
      image: 'http://localhost:4200/assets/img/png/partners/color-white/chevron.png'
    },
    {
      name: 'NCR',
      image: 'http://localhost:4200/assets/img/png/partners/color-white/ncr.png'
    },
    {
      name: 'Ecobank',
      image: 'http://localhost:4200/assets/img/png/partners/color-white/ecobank.png'
    },
    {
      name: 'Union Bank',
      image: 'http://localhost:4200/assets/img/png/partners/color-white/unionbank.png'
    }
  ];

  constructor() { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
