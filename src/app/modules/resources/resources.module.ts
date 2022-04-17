import { LibModule } from './../../lib/lib.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourceListComponent } from './pages/resource-list/resource-list.component';
import { ResourceCaseStudyComponent } from './pages/resource-case-study/resource-case-study.component';
import { ResourceArticleComponent } from './pages/resource-article/resource-article.component';
import { ResourceVideoComponent } from './pages/resource-video/resource-video.component';
import { ResourceListTabComponent } from './pages/resource-list/resource-list-tab/resource-list-tab.component';


@NgModule({
  declarations: [
    ResourceListComponent,
    ResourceCaseStudyComponent,
    ResourceArticleComponent,
    ResourceVideoComponent,
    ResourceListTabComponent,
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    LibModule
  ]
})
export class ResourcesModule { }
