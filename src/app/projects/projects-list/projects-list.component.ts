import {Component, OnInit} from '@angular/core';
import {ProjectStorageService} from "../../services/project-storage.service";

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  public projects$ = this.projectStorageService.getProjects$();

  constructor(
    private projectStorageService: ProjectStorageService
  ) { }

  ngOnInit(): void {
  }

}
