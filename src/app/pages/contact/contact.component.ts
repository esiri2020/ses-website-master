import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ses-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {

  heroTitle = 'We’d love to hear <br /> from you';
  heroDesp = 'If you want to discover how SES can help you develop your business, do not hesitate to contact our team of industry experts.';

  constructor() { }

  ngOnInit(): void {
  }

}
