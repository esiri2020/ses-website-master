import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ses-home-partners',
  templateUrl: './home-partners.component.html',
})
export class HomePartnersComponent implements OnInit, AfterViewInit {

  listener: any;
  @Input() partners: any[] = [];
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

}
