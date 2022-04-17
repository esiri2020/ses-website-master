import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleFloatCardComponent } from './schedule-float-card/schedule-float-card.component';
import { ListgridCardComponent } from './listgrid-card/listgrid-card.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { NgbCarouselModule, NgbModalModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';
import { HeroComponent } from './hero/hero.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { LocationMapComponent } from './location-map/location-map.component';




@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ScheduleFloatCardComponent,
        ListgridCardComponent,
        SidenavComponent,
        HeroComponent,
        TestimonialComponent,
        LocationMapComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbCarouselModule,
        NgbModalModule,
        NgbAccordionModule,
        CountUpModule,
        ScrollToModule.forRoot(),
    ],
    exports: [
        CommonModule,
        NgbCarouselModule,
        NgbModalModule,
        NgbAccordionModule,
        CountUpModule,
        ScrollToModule,
        HeaderComponent,
        FooterComponent,
        ScheduleFloatCardComponent,
        ListgridCardComponent,
        HeroComponent,
        TestimonialComponent,
        LocationMapComponent,
    ]
})
export class LibModule { }
