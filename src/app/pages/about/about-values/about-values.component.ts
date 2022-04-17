import { Component, OnInit, Input, Renderer2, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'ses-about-values',
  templateUrl: './about-values.component.html',
})
export class AboutValuesComponent implements OnInit, AfterViewInit {

  @Input() values: any[] = [
    {
      tag: 'Sustainabilty',
      title: 'Our <br /><em>Sustainabity</em> Goal',
      description: 'This is central to SES. In order to future-proof our business, we employ a sustainable approach to ensure an enduring planet for future generations'
    },
    {
      tag: 'Value',
      title: 'Creating <br /><em>Value</em>',
      description: 'We are able to increase customer value and accelerate innovation. We aim to use the opportunities which come from a world increasingly driven by data to create societal, economic, and environmental value.'
    },
    {
      tag: 'Existence',
      title: 'Our <br /><em>Existence</em>',
      description: 'The culture at SES is drawn from our desire to efficiently provide complete end-to-end business solutions to organisations and market access into Africa for international organisations. SES draws from first-hand experience, local and international partnerships and a strong distribution network to offer best-in-class products and services.'
    }
  ];

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.changeArrowIcon();
  }


  changeArrowIcon(): void {

    const leftArrowSel = ['carousel-control-prev-icon', 'mdi', 'mdi-arrow-left'];
    const rightArrowSel = ['carousel-control-next-icon', 'mdi', 'mdi-arrow-right'];

    const leftArrow = new ElementRef(document.querySelector('.' + leftArrowSel[0]));
    this.renderer2.removeClass(leftArrow.nativeElement, leftArrowSel[0]);
    this.renderer2.addClass(leftArrow.nativeElement, leftArrowSel[1]);
    this.renderer2.addClass(leftArrow.nativeElement, leftArrowSel[2]);

    const rightArrow = new ElementRef(document.querySelector('.' + rightArrowSel[0]));
    this.renderer2.removeClass(rightArrow.nativeElement, rightArrowSel[0]);
    this.renderer2.addClass(rightArrow.nativeElement, rightArrowSel[1]);
    this.renderer2.addClass(rightArrow.nativeElement, rightArrowSel[2]);
  }
}
