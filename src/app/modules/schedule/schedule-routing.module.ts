import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { ScheduleServiceComponent } from './pages/schedule-service/schedule-service.component';
import { ScheduleEnquiryComponent } from './pages/schedule-enquiry/schedule-enquiry.component';

const routes: Routes = [
  {
    path: '', component: ScheduleComponent, children: [
      { path: 'services', component: ScheduleServiceComponent },
      { path: 'enquiry/:title', component: ScheduleEnquiryComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
