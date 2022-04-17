import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ses-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() label: string;
  @Input() showButton = false;
  @Input() buttonText: string;
  @Input() buttonUrl: string;
  @Input() actionType = 'link'; // or 'scroll' | 'download'
  @Input() showImage = false;
  @Input() imageUrl: string;
  @Input() showSearch = false;
  @Input() searchText = 'Search...';

  @Output() searchQueryChanged = new EventEmitter<string>();

  searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  changed(): void {
    this.searchQueryChanged.emit(this.searchValue);
  }

}
