import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-solution-photos',
  templateUrl: './solution-photos.component.html',
})
export class SolutionPhotosComponent implements OnInit {

  @Input() photos: any[] = [
    {
      image: '/assets/img/png/solutions/solution-img-1.png'
    },
    {
      image: '/assets/img/png/solutions/solution-img-2.png'
    },
    {
      image: '/assets/img/png/solutions/solution-img-4.png'
    },
    {
      image: '/assets/img/png/solutions/solution-img-3.png'
    },
    {
      image: '/assets/img/png/solutions/solution-img-2.png'
    },
    {
      image: '/assets/img/png/solutions/solution-img-1.png'
    },
    {
      image: '/assets/img/png/solutions/solution-img-3.png'
    },
    {
      image: '/assets/img/png/solutions/solution-img-4.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
