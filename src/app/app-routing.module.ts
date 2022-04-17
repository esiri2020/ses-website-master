import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HelpComponent } from './pages/help/help.component';

import { LegalComponent } from './pages/legal/legal.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { MediaKitComponent } from './pages/media-kit/media-kit.component';
import { CareerApplyComponent } from './pages/career-apply/career-apply.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'careers/:title/apply', component: CareerApplyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'mediakit', component: MediaKitComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'help', component: HelpComponent },

  { path: 'solution/:title', component: SolutionsComponent },

  { path: 'terms-condition', component: LegalComponent, data: { id: 'terms' } },
  { path: 'privacy-policy', component: LegalComponent, data: { id: 'privacy' } },

  { path: 'schedule', loadChildren: () => import('./modules/schedule/schedule.module').then(m => m.ScheduleModule) },
  { path: 'resources', loadChildren: () => import('./modules/resources/resources.module').then(m => m.ResourcesModule) },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
