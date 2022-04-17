import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ses-career-apply',
  templateUrl: './career-apply.component.html',
})
export class CareerApplyComponent implements OnInit {

  job: any = {
    id: 'content-stragist-influencer-121230082HXG1',
    title: 'Content Strategist & Influencer',
    description: 'We’re looking for an experienced content person to build a range of products for our clients, varying from greenfield applications.',
    content: `
        <h3>Job brief</h3>
        <p>We are looking for a Content Strategist to manage all writing material we create for business
            purposes, from online guides and articles to newsletters and social media posts.</p>

        <p>
            Content Strategist responsibilities include publishing our monthly newsletter, tracking website
            traffic and user engagement and generating new blog post topics. If you have creative ideas about
            how to engage our audience online and have experience producing new content types, we’d like to meet
            you. Please share a portfolio or links to your published work, along with your application.</p>

        <p>
            Ultimately, you will ensure our web content is on brand and adds value to existing and potential
            customers.</p>


        <h3>Responsibilites</h3>
        <ul>
            <li>Manage our editorial calendar to ensure timely publication</li>
            <li>Assign blog posts to writers</li>
            <li>Identify gaps in our content and recommend new topics</li>
            <li>Create style guides to use as reference</li>
            <li>Proofread and edit written pieces before publication</li>
            <li>Schedule social media posts</li>
            <li>Conduct keyword and SEO research to understand customers’ needs</li>
            <li>Monitor web traffic and engagement (e.g. conversions and bounce rates)</li>
            <li>Coordinate with marketing and design teams to illustrate articles</li>
            <li>Follow industry-related news and generate ideas around trending topics</li>
            <li>Review and update published content as needed</li>
        </ul>


        <h3>Why we love working here</h3>
        <ul>
            <li>Manage our editorial calendar to ensure timely publication</li>
            <li>Assign blog posts to writers</li>
            <li>Identify gaps in our content and recommend new topics</li>
            <li>Create style guides to use as reference</li>
            <li>Proofread and edit written pieces before publication</li>
            <li>Schedule social media posts</li>
            <li>Conduct keyword and SEO research to understand customers’ needs</li>
            <li>Monitor web traffic and engagement (e.g. conversions and bounce rates)</li>
            <li>Coordinate with marketing and design teams to illustrate articles</li>
            <li>Follow industry-related news and generate ideas around trending topics</li>
            <li>Review and update published content as needed</li>
        </ul>
    `,
    applicants: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
