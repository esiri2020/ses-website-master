import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ses-about-approach',
  templateUrl: './about-approach.component.html',
})
export class AboutApproachComponent implements OnInit {

  @Input() approaches: any[] = [
    {
      icon: '/assets/img/svg/design-illus.svg',
      title: 'Design',
      description: 'Consult us at any stage of your project. Just an idea? We’ll design it.'
    },
    {
      icon: '/assets/img/svg/dev-illus.svg',
      title: 'Development',
      description: 'SES provides a full “design-to-development” service powered by a committed development team.'
    },
    {
      icon: '/assets/img/svg/deploy-illus.svg',
      title: 'Deploy',
      description: 'At deployment we help turn your ideas into a new driving force of your business.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
