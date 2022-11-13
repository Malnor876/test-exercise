import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {AddProjectsComponent} from './projects/add-projects/add-projects.component';
import {ProjectsListComponent} from './projects/projects-list/projects-list.component';
import {ProjectViewComponent} from './projects/project-view/project-view.component';
import {ProjectsDashboardComponent} from './projects/projects-dashboard/projects-dashboard.component';
import {FormsModule} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import ruLocale from '@angular/common/locales/ru'

registerLocaleData(ruLocale, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    AddProjectsComponent,
    ProjectsListComponent,
    ProjectViewComponent,
    ProjectsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
