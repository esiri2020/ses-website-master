import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  templateUrl: './resource-case-study.component.html',
})
export class ResourceCaseStudyComponent implements OnInit, AfterViewInit {

  case: any = {
    coverImage: '/assets/img/png/resource/res-img-case-study.png',
    title: 'Creating a tethered micro-economic logic',
    type: 'blog',
    author: 'Content Team',
    company: {
      name: 'AI Core',
      website: 'http://aicore.com'
    },
    readDuration: 6,
    date: new Date('2020-07-16T04:20:05Z'),
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    contents: [
      {
        heading: 'Challenge',
        content:
          `
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          `,
        images: [
          '/assets/img/png/resource/res-case-img-1.png',
          '/assets/img/png/resource/res-case-img-2.png',
          '/assets/img/png/resource/res-case-img-3.png',
          '/assets/img/png/resource/res-case-img-4.png'
        ]
      },
      {
        heading: 'Solution',
        content:
          `
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          `,
      }
    ],
    metrics: [
      {
        type: 'time',
        value: 5,
        title: 'Quick Update',
        info: 'info on the title'
      },
      {
        type: 'rank',
        value: 3,
        title: 'Business Ranking',
        info: 'info on the title'
      },
      {
        type: 'percentage',
        value: 90,
        title: 'Delivery Percentage',
        info: 'info on the title'
      },
      {
        type: 'count',
        value: 10000,
        title: 'Delivery Count',
        info: 'info on the title'
      }
    ]
  };

  countUpOptions: any = {
    duration: 0.8,
    useEasing: false
  };

  listener: any;
  @ViewChild('container') container: ElementRef;
  @ViewChild('scroller') scroller: ElementRef;

  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'resize', (e) => {
      this.setPadding((e.target as Window).innerWidth);
    });
  }

  ngOnInit(): void {
    console.log(history.state);
  }

  ngAfterViewInit(): void {
    this.setPadding(window.innerWidth);
  }

  getFullCaseStudy(): void {
    const selectedCase = history.state;
    // run API
  }

  setPadding(width: number): void {
    const padding = (width - (this.container.nativeElement.clientWidth - 30)) / 2;
    this.renderer2.setStyle(this.scroller.nativeElement, 'padding', '0 ' + padding + 'px');
  }

}
