import { Component, OnInit, Input, Renderer2, OnDestroy, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { PositionUtilService } from 'src/app/services/util/position-util.service';

@Component({
  selector: 'ses-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  listener: any;
  routeObserver: any;
  isFixed = false;
  reachoutCardShown = false;
  sidenavShown = false;

  @Input() theme = 'dark';

  constructor(private renderer2: Renderer2, private posUtil: PositionUtilService, private router: Router) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      this.isFixed = this.posUtil.getYPosition(e) > 50;
    });
    this.setInitTheme();

    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    this.routeObserver = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop || (e.target as Document).scrollingElement.scrollTop;
  }

  setInitTheme(): void {
    const elem = document.querySelector('window') as Element || document.scrollingElement;
    this.isFixed = elem.scrollTop > 50;
  }

  toggleReachoutCard(value: boolean): void {
    this.reachoutCardShown = value;
    this.sidenavShown = false;
  }

  toggleSidenav(value: boolean): void {
    this.sidenavShown = value;
    this.reachoutCardShown = false;
  }


  ngOnDestroy(): void {
    this.listener();

    if (this.routeObserver) {
      this.routeObserver.unsubscribe();
    }
  }


}
