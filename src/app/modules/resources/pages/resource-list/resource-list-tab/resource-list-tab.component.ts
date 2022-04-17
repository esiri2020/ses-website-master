import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ses-resource-list-tab',
  templateUrl: './resource-list-tab.component.html',
})
export class ResourceListTabComponent implements OnInit {

  @Input() resources: any[] = [
    {
      coverImageThumbnail: '/assets/img/png/resource/res-blog.png',
      title: 'Changing the entire nation’s economy',
      type: 'blog',
      author: 'Content Team'
    },
    {
      coverImageThumbnail: '/assets/img/png/resource/res-video.png',
      title: 'Disruptive techniques in the stock market',
      type: 'video',
      author: 'Marketing Team'
    },
    {
      coverImageThumbnail: '/assets/img/png/resource/res-case-study.png',
      title: 'Creating a tethered micro-economic logic',
      type: 'case-study',
      author: 'Research Team'
    },
    {
      coverImageThumbnail: '/assets/img/png/resource/res-blog.png',
      title: 'Changing the entire nation’s economy',
      type: 'blog',
      author: 'Content Team'
    },
    {
      coverImageThumbnail: '/assets/img/png/resource/res-video.png',
      title: 'Disruptive techniques in the stock market',
      type: 'video',
      author: 'Marketing Team'
    },
    {
      coverImageThumbnail: '/assets/img/png/resource/res-case-study.png',
      title: 'Creating a tethered micro-economic logic',
      type: 'case-study',
      author: 'Research Team'
    },
  ];
  @Input() activeNav = 'all';
  displayResources: any[] = [];

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    this.setContent(this.activeNav);
  }

  setContent(type: string): void {
    this.activeNav = type;
    if (type !== 'all') {
      this.displayResources = this.resources.filter(x => x.type === type);
    }
    else {
      this.displayResources = this.resources;
    }
  }

  getDisplayType(resource: any): string {
    switch (resource.type) {
      case 'blog':
        return 'blog';
      case 'case-study':
        return 'Case Study';
      case 'video':
        return 'Video';

    }
  }
}
