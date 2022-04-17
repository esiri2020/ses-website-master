import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

import { LibModule } from './lib/lib.module';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MediaKitComponent } from './pages/media-kit/media-kit.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { LegalComponent } from './pages/legal/legal.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeHeroComponent } from './pages/home/home-hero/home-hero.component';
import { HomeMetricsComponent } from './pages/home/home-metrics/home-metrics.component';
import { HomePartnersComponent } from './pages/home/home-partners/home-partners.component';
import { HomeContactComponent } from './pages/home/home-contact/home-contact.component';
import { HomeBriefComponent } from './pages/home/home-brief/home-brief.component';
import { HomeServicesComponent } from './pages/home/home-services/home-services.component';
import { AboutBriefComponent } from './pages/about/about-brief/about-brief.component';
import { AboutValuesComponent } from './pages/about/about-values/about-values.component';
import { AboutApproachComponent } from './pages/about/about-approach/about-approach.component';
import { AboutHistoryComponent } from './pages/about/about-history/about-history.component';
import { AboutTeamComponent } from './pages/about/about-team/about-team.component';
import { SolutionContactComponent } from './pages/solutions/solution-contact/solution-contact.component';
import { SolutionFeaturesComponent } from './pages/solutions/solution-features/solution-features.component';
import { SolutionBenefitsComponent } from './pages/solutions/solution-benefits/solution-benefits.component';
import { SolutionPhotosComponent } from './pages/solutions/solution-photos/solution-photos.component';
import { LegalContentComponent } from './pages/legal/legal-content/legal-content.component';
import { ContactMapComponent } from './pages/contact/contact-map/contact-map.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { MediakitPressComponent } from './pages/media-kit/mediakit-press/mediakit-press.component';
import { CareerOpeningsComponent } from './pages/careers/career-openings/career-openings.component';
import { CareerBenefitsComponent } from './pages/careers/career-benefits/career-benefits.component';
import { HelpFaqComponent } from './pages/help/help-faq/help-faq.component';
import { PartnerListComponent } from './pages/partners/partner-list/partner-list.component';
import { CareerApplyComponent } from './pages/career-apply/career-apply.component';
import { CareerInfoComponent } from './pages/career-apply/career-info/career-info.component';
import { CareerFormComponent } from './pages/career-apply/career-form/career-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareersComponent,
    ContactComponent,
    MediaKitComponent,
    SolutionsComponent,
    PartnersComponent,
    LegalComponent,
    HelpComponent,
    NotFoundComponent,
    HomeHeroComponent,
    HomeMetricsComponent,
    HomePartnersComponent,
    HomeContactComponent,
    HomeBriefComponent,
    HomeServicesComponent,
    AboutBriefComponent,
    AboutValuesComponent,
    AboutApproachComponent,
    AboutHistoryComponent,
    AboutTeamComponent,
    SolutionContactComponent,
    SolutionFeaturesComponent,
    SolutionBenefitsComponent,
    SolutionPhotosComponent,
    ContactComponent,
    LegalContentComponent,
    ContactMapComponent,
    ContactFormComponent,
    MediakitPressComponent,
    CareerOpeningsComponent,
    CareerBenefitsComponent,
    HelpFaqComponent,
    PartnerListComponent,
    CareerApplyComponent,
    CareerInfoComponent,
    CareerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
