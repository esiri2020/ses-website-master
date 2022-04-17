import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './legal.component.html',
})
export class LegalComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  legalPage = '';
  heroTitle = 'Terms & Conditions';
  heroDesp = 'We partner with you to design and develop cost-effective solutions, and promptly';

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.legalPage = data.id;
      this.setTitle();
    });

  }

  setTitle(): void {
    switch (this.legalPage) {
      case 'terms':
        this.heroTitle = 'Terms & Conditions';
        break;
      case 'privacy':
        this.heroTitle = 'Privacy Policy';
        break;
    }
  }

}
