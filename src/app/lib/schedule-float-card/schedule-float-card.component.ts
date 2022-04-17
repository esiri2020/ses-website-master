import { Component, OnInit, ChangeDetectionStrategy, Input, Renderer2, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'ses-schedule-float-card',
  templateUrl: './schedule-float-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleFloatCardComponent implements OnInit, OnDestroy {

  @Input() offsetElement: string;
  @ViewChild('floatcard') el: ElementRef;
  listener: any;
  private shownOnce: boolean;

  constructor(private renderer2: Renderer2) {
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
      this.setFloatPosition(this.getYPosition(e));
    });
  }

  ngOnInit(): void {
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop || (e.target as Document).scrollingElement.scrollTop;
  }

  setFloatPosition(pos: number): void {
    const offsetPosition = (document.querySelector(this.offsetElement) as HTMLElement).offsetTop - 400;
    if (pos > offsetPosition && !this.shownOnce) {
      this.renderer2.removeClass(this.el.nativeElement, 'closed');
      this.renderer2.addClass(this.el.nativeElement, 'opened');
      this.shownOnce = true;
    }
  }

  closeFloatCard(): void {
    this.renderer2.removeClass(this.el.nativeElement, 'opened');
    this.renderer2.addClass(this.el.nativeElement, 'closed');
  }

  ngOnDestroy(): void {
    this.listener();
  }
}

