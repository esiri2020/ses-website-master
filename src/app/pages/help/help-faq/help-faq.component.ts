import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PositionUtilService } from 'src/app/services/util/position-util.service';

@Component({
  selector: 'ses-help-faq',
  templateUrl: './help-faq.component.html',
})
export class HelpFaqComponent implements OnInit {
  @Input() faqs: any[] = [
    {
      heading: 'General',
      list: [
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        }
      ]
    },
    {
      heading: 'Title 1',
      list: [
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
      ]
    },
    {
      heading: 'Title 2',
      list: [
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
      ]
    },
    {
      heading: 'Title 3',
      list: [
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'What Payment methods do u accept?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
        {
          question: 'How are you able to offer higher returns than traditional banks?',
          answer: 'We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more.We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more, We Specializes in the deployment and maintenance of ATMs and self-service terminals, complaince tools and more...'
        },
      ]
    },
  ];


  scrollOffset = -125;
  scrollPosition: number;
  listener: any;

  constructor(private renderer2: Renderer2, private posUtil: PositionUtilService) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      this.renderNavigation(this.posUtil.getYPosition(e));
    });
  }

  ngOnInit(): void {
  }

  getRefId(item: any): string {
    return (item.heading.split(' ').join('-')).toLowerCase();
  }

  resetNavClasses(): void {
    const navs = document.querySelectorAll('.help-faq aside li');
    navs.forEach(element => {
      const el = new ElementRef(element);
      this.renderer2.removeClass(el.nativeElement, 'active');
    });
  }

  renderNavigation(pos: number): void {

    if (window.innerWidth <= 768) {
      this.scrollOffset = -80;
    }

    this.faqs.forEach(item => {
      const idRef = this.getRefId(item);
      const el = new ElementRef(document.getElementById(idRef));

      const navRef = 'nav-' + this.getRefId(item);
      const nav = new ElementRef(document.getElementById(navRef));

      const top = this.posUtil.getElementOffset(el.nativeElement).top;

      if (pos > (top + this.scrollOffset)) {
        this.resetNavClasses();
        this.renderer2.addClass(nav.nativeElement, 'active');
      }
    });
  }
}
