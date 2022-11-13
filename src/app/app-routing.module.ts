import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddProjectsComponent} from "./projects/add-projects/add-projects.component";
import {ProjectsDashboardComponent} from "./projects/projects-dashboard/projects-dashboard.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'add'
  }, {
    path: 'add',
    component: AddProjectsComponent
  },
  {
    path: 'view',
    component: ProjectsDashboardComponent
  },
  {
    path: 'view/:id',
    component: ProjectsDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
