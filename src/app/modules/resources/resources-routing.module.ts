import { ResourceArticleComponent } from './pages/resource-article/resource-article.component';
import { ResourceVideoComponent } from './pages/resource-video/resource-video.component';
import { ResourceCaseStudyComponent } from './pages/resource-case-study/resource-case-study.component';
import { ResourceListComponent } from './pages/resource-list/resource-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ResourceListComponent },
  { path: 'all', component: ResourceListComponent, data: { type: 'all' } },
  { path: 'case-study', component: ResourceListComponent, data: { type: 'case-study' } },
  { path: 'video', component: ResourceListComponent, data: { type: 'video' } },
  { path: 'blog', component: ResourceListComponent, data: { type: 'blog' } },

  { path: 'case-study/:title', component: ResourceCaseStudyComponent },
  { path: 'video/:title', component: ResourceVideoComponent },
  { path: 'blog/:title', component: ResourceArticleComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
