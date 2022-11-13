import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {filter, map, Observable, switchMap} from "rxjs";
import {ProjectStorageService} from "../../services/project-storage.service";
import {Project} from "../../models/project.model";

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.scss']
})
export class ProjectsDashboardComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectStorageService: ProjectStorageService
  ) {
  }

  public project$: Observable<Project | undefined> =
    this.activatedRoute.params.pipe(
      map(params => params['id']),
      filter(Boolean),
      switchMap(id => this.projectStorageService.getProjectById$(id))
    );

  ngOnInit(): void {
  }

}
