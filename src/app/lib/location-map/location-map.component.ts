import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ses-location-map',
  templateUrl: './location-map.component.html',
})
export class LocationMapComponent implements OnInit {

  @Output() selected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  selectCountry(code: string): void {
    this.selected.emit(code);
  }

}
