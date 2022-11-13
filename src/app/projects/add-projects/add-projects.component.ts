import {Component, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {ProjectStorageService} from "../../services/project-storage.service";

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {
  public jsonField: string = '';
  public errors: Subject<string | void> = new Subject<string | void>()

  constructor(
    private projectStorageService: ProjectStorageService
  ) {
  }

  ngOnInit(): void {
  }

  public handleSaveButton(): void {
    this.errors.next(this.projectStorageService.setProjects(this.jsonField))
  }

  resetError() {
    this.errors.next('')
  }
}
