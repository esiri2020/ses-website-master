import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ses-contact-map',
  templateUrl: './contact-map.component.html',
})
export class ContactMapComponent implements OnInit {
  @Input() contacts: any[] = [
    {
      countryCode: 'NG',
      city: 'Lagos',
      country: 'Nigeria',
      address: '3 Alhaji Bashorun Street, <br />Off Norman Williams Street, <br />Ikoyi, Lagos, Nigeria.',
      phones: ['+ 234 (0) 1 463 1468', '1 463 1469'],
      emailAddress: 'info@structuredresource.com',
      isHead: true
    },
    {
      countryCode: 'GH',
      city: 'Accra',
      country: 'Ghana',
      address: '5a Osu Badu Street, <br />Airport West, <br />Accra, Ghana.',
      phones: ['+ 234 (0) 1 463 1468', '1 463 1469'],
      emailAddress: 'info@structuredresource.com',
      isHead: false
    }
  ];
  selectedContact: any;
  constructor() { }

  ngOnInit(): void {
    this.selectedContact = this.contacts[0];
  }

  changeInfo(code: string): void {
    this.selectedContact = this.contacts.find((x) => x.countryCode === code);
  }

  getCountryIcon(code: string): string {
    if (code) {
      return `/assets/img/svg/icon-${code.toLowerCase()}.svg`;
    }

    return `/assets/img/svg/icon-ng.svg`;
  }

}
