import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionUtilService {
  constructor() { }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop || (e.target as Document).scrollingElement.scrollTop;
  }


  getElementOffset(el: any): any {
    let top = 0;
    let left = 0;
    let element = (el as HTMLElement);

    // Loop through the DOM tree
    // and add it's parent's offset to get page offset
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = (element.offsetParent as HTMLElement);
    } while (element);

    return {
      top,
      left,
    };
  }
}
