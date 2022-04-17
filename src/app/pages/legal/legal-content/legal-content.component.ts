import { PositionUtilService } from './../../../services/util/position-util.service';
import { Component, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'ses-legal-content',
  templateUrl: './legal-content.component.html',
})
export class LegalContentComponent implements OnInit {

  @Input() page = 'terms';
  @Input() contents: any[];

  private termContent = [
    {
      title: 'Terms 0',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
    },
    {
      title: 'Terms 1',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
          <li>Sed do eiusmod tempor incididunt ut labore.</li>
          <li>Nostrud exercitation ullamco laboris nisi ut aliquip.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
          <li>Sed do eiusmod tempor incididunt ut labore.</li>
          <li>Nostrud exercitation ullamco laboris nisi ut aliquip.</li>
        </ul>
      `
    },
    {
      title: 'Terms 2',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      `
    },
    {
      title: 'Terms 3',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
    },
    {
      title: 'Terms 4',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
    },
  ];

  private privacyContent = [
    {
      title: 'Privacy 0',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
    },
    {
      title: 'Privacy 1',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
          <li>Sed do eiusmod tempor incididunt ut labore.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
          <li>Sed do eiusmod tempor incididunt ut labore.</li>
          <li>Nostrud exercitation ullamco laboris nisi ut aliquip.</li>
        </ul>
      `
    },
    {
      title: 'Privacy 2',
      content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      `
    },
    {
      title: 'Privacy 3',
      content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
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
    this.setContent();
  }

  getRefId(item: any): string {
    return (item.title.split(' ').join('-')).toLowerCase();
  }

  setContent(): void {
    switch (this.page) {
      case 'terms':
        this.contents = this.termContent;
        break;
      case 'privacy':
        this.contents = this.privacyContent;
        break;
    }
  }

  resetNavClasses(): void {
    const navs = document.querySelectorAll('.legal aside li');
    navs.forEach(element => {
      const el = new ElementRef(element);
      this.renderer2.removeClass(el.nativeElement, 'active');
    });
  }

  renderNavigation(pos: number): void {

    if (window.innerWidth <= 768) {
      this.scrollOffset = -80;
    }

    this.contents.forEach(item => {
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
