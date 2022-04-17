import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ses-about-history',
  templateUrl: './about-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutHistoryComponent implements OnInit, AfterViewInit {

  @Input() timeline: any[] = [
    {
      year: 2004,
      milestone: 'Founded as a service company catering to Telecoms, Engineering, IT and Oil & Gas organisations',
      image: ''
    },
    {
      year: 2005,
      milestone: 'Commenced operations in Nigeria by selling solar equipment to corporate and individual customers such as NNPC (NAPIMS) and GTBank',
      image: '/assets/img/png/about/history-1.png'
    },
    {
      year: 2008,
      milestone: 'Secured partnership with Roxtec International AB, MP Bolagen industries, AB and Dwyer Instrument Inc. Commenced the supply cables, pipes and other engineering products to  ustomers in the engineering sector such as SPDC.',
      image: ''
    },
    {
      year: 2011,
      milestone: 'Commenced design and supply of cable trays, asset protection, equipment entry and pipe entry systems. Commenced procurement and maintenance services.',
      image: '/assets/img/png/about/history-2.png'
    },
    {
      year: 2012,
      milestone: 'Commenced services taliored to suit the eBanking sector. These include deployment of: Power backup systems for ATM terminals (omerson & firefly). In this time. SRDL secured partnership with Emerson and Northstar Batteries USA. Antiskimming devices (after securing partnership TMD security Grnom.',
      image: undefined
    },
    {
      year: 2013,
      milestone: 'Commenced services on other equipment such as UPS, HPAC & HVAC, Power audit & clean up and General electrification. Incoporation of a subsidiary SES',
      image: '/assets/img/png/about/history-3.png'
    },
    {
      year: 2015,
      milestone: 'Secured partnership with Dell Inc, USA. Thus commencing System Server and Networking solutions.',
      image: undefined
    },
    {
      year: 2017,
      milestone: 'Launched a B2B online platform "engineeringshop.ng". Secured partnership with Nordock, Goibus, Extech, CMP.',
      image: ''
    },
  ];

  reverseIndex = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19];

  listener: any;
  @ViewChild('container') container: ElementRef;
  @ViewChild('scroller') scroller: ElementRef;

  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'resize', (e) => {
      this.setPadding((e.target as Window).innerWidth);
    });
  }

  ngAfterViewInit(): void {
    this.setPadding(window.innerWidth);
  }

  ngOnInit(): void {
  }

  setPadding(width: number): void {
    const padding = (width - (this.container.nativeElement.clientWidth - 30)) / 2;
    this.renderer2.setStyle(this.scroller.nativeElement, 'padding', '0 ' + padding + 'px');
  }

  checkIndex(index: number): boolean {
    if (this.reverseIndex.find(x => x === index)) {
      return true;
    }
    return false;
  }

}
