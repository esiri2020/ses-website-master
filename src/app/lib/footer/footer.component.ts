import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();

  @Input() showCompanies = false;
  constructor() { }

  ngOnInit(): void {
  }

}
