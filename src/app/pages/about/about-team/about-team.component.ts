import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ses-about-team',
  templateUrl: './about-team.component.html',
})
export class AboutTeamComponent implements OnInit {
  @Input() team: any[] = [
    {
      name: 'Ciroma Chukwuma',
      role: 'CEO',
      photo: '/assets/img/png/about/team-1.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'COO',
      photo: '/assets/img/png/about/team-2.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'Finacial Analyst',
      photo: '/assets/img/png/about/team-3.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'Design Lead',
      photo: '/assets/img/png/about/team-4.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'Software Lead',
      photo: '/assets/img/png/about/team-5.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'Human Resource',
      photo: '/assets/img/png/about/team-6.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'Human Resource',
      photo: '/assets/img/png/about/team-7.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'Human Resource',
      photo: '/assets/img/png/about/team-8.png'
    },
    {
      name: 'Ciroma Chukwuma',
      role: 'Human Resource',
      photo: '/assets/img/png/about/team-9.png'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
