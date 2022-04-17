import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { LibModule } from 'src/app/lib/lib.module';
import { ScheduleServiceComponent } from './pages/schedule-service/schedule-service.component';
import { ScheduleEnquiryComponent } from './pages/schedule-enquiry/schedule-enquiry.component';


@NgModule({
  declarations: [ScheduleComponent, ScheduleServiceComponent, ScheduleEnquiryComponent],
  imports: [
    CommonModule,
    LibModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
