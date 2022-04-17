import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ses-partner-list',
  templateUrl: './partner-list.component.html',
})
export class PartnerListComponent implements OnInit {

  @Input() partners: any[] = [
    {
      logo: '/assets/img/png/partners/color-full/fcmb.png',
      name: 'FCMB',
      industry: 'Finance Services',
      website: 'http://fcmb.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/ncr.png',
      name: 'NCR',
      industry: 'Finance Services',
      website: 'http://fcmb.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/fidelity.png',
      name: 'Fidelity',
      industry: 'Finance Services',
      website: 'http://fidelity.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/shell.png',
      name: 'Fidelity',
      industry: 'Finance Services',
      website: 'http://shell.com'
    }
  ];

  @Input() clients: any[] = [
    {
      logo: '/assets/img/png/partners/color-full/heritage.png',
      name: 'Heritage',
      industry: 'Finance Services',
      website: 'http://heritage.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/ncr.png',
      name: 'NCR',
      industry: 'Finance Services',
      website: 'http://fcmb.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/polaris.png',
      name: 'Polaris',
      industry: 'Finance Services',
      website: 'http://fidelity.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/stanbicbank.png',
      name: 'Stanbic Bank',
      industry: 'Finance Services',
      website: 'http://stanbicbank.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/crcc.png',
      name: 'CRCC',
      industry: 'Finance Services',
      website: 'http://crcc.com'
    },
    {
      logo: '/assets/img/png/partners/color-full/airtel.png',
      name: 'Airtel',
      industry: 'Finance Services',
      website: 'http://stanbicbank.com'
    }
  ];
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  toggleContent(link: Event, content: any): void {
    // toggle Content
    const contents = document.querySelectorAll('.partner-list .content');
    contents.forEach(element => {
      const elem = new ElementRef(element);
      this.renderer2.removeClass(elem.nativeElement, 'active');
    });
    this.renderer2.addClass(content, 'active');

    // toggle Link
    const navs = document.querySelectorAll('.partner-list .link-tab a');
    navs.forEach(element => {
      const elem = new ElementRef(element);
      this.renderer2.removeClass(elem.nativeElement, 'active');
    });
    this.renderer2.addClass((link.target as HTMLElement), 'active');
  }

}
