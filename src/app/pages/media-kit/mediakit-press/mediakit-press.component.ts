import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ses-mediakit-press',
  templateUrl: './mediakit-press.component.html',
})
export class MediakitPressComponent implements OnInit {

  @Input() articles: any[] = [
    {
      coverImage: '/assets/img/png/press/press-1.png',
      title: 'Financial investors are coming onboard and things are looking better than we can ever imagine.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      tag: 'SES',
      url: 'https://www.jpmorganchase.com/corporate/news/pr/fintech-accelerator-catalyst-fund-announcement.htm',
      date: new Date('2020-09-16T04:20:05Z')
    },
    {
      coverImage: '/assets/img/png/press/press-2.png',
      title: 'Structured systems paving the way for innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      tag: 'SES',
      url: 'https://www.jpmorganchase.com/corporate/news/pr/fintech-accelerator-catalyst-fund-announcement.htm',
      date: new Date('2020-08-16T04:20:05Z')
    },
    {
      coverImage: '/assets/img/png/press/press-2.png',
      title: 'Structured systems paving the way for innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      tag: 'SES',
      url: 'https://www.jpmorganchase.com/corporate/news/pr/fintech-accelerator-catalyst-fund-announcement.htm',
      date: new Date('2020-07-16T04:20:05Z')
    },
    {
      coverImage: '/assets/img/png/press/press-2.png',
      title: 'Structured systems paving the way for innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      tag: 'SES',
      url: 'https://www.jpmorganchase.com/corporate/news/pr/fintech-accelerator-catalyst-fund-announcement.htm',
      date: new Date('2020-08-10T04:20:05Z')
    },
    {
      coverImage: '/assets/img/png/press/press-2.png',
      title: 'Structured systems paving the way for innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
      tag: 'SES',
      url: 'https://www.jpmorganchase.com/corporate/news/pr/fintech-accelerator-catalyst-fund-announcement.htm',
      date: new Date('2020-05-02T04:20:05Z')
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
