import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  templateUrl: './resource-video.component.html',
})
export class ResourceVideoComponent implements OnInit {

  video: any = {
    coverImage: '/assets/img/png/resource/res-img-video.png',
    title: 'Disruptive techniques in the stock market',
    type: 'video',
    author: 'Content Team',
    watchDuration: 6,
    date: new Date('2020-07-16T04:20:05Z'),
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat',
    videoURL: '/assets/video/video.mp4'
  };

  showVideo = false;

  @ViewChild('videoEl') videoElement: ElementRef;
  constructor(private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    console.log(history.state);
  }

  getVideo(): void {
    const selectedVideo = history.state;
    // run API
  }

  stopVideo(): void {
    (this.videoElement.nativeElement as HTMLVideoElement).pause();
    this.showVideo = false;
  }

  playVideo(): void {
    (this.videoElement.nativeElement as HTMLVideoElement).play();
    this.showVideo = true;
  }

  openVideoModal(): void {

  }

}
