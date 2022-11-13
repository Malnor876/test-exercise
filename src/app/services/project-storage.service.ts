import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Project} from "../models/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectStorageService {

  constructor() {
    const projects = localStorage.getItem('projects');
    if (projects) {
      this.projects$.next(JSON.parse(projects));

    }
  }

  private projects$: BehaviorSubject<Project[]> = new BehaviorSubject<Project[]>([])

  getProjects$(): Observable<Project[]> {
    return this.projects$.asObservable();

  }

  getProjects(): Project[] | null {
    return this.projects$.value;
  }

  setProjects(value: string): string | void {
    try {
      const projects = JSON.parse(value).Projects;
      localStorage.setItem('projects', JSON.stringify(projects));
      this.projects$.next(projects);
    } catch (e) {
      return ('Введен неправильный JSON');
    }
  }

  getProjectById$(id: string): Observable<Project | undefined> {
    return this.projects$.pipe(map(projects => projects.find(project => project.id === id)));
  }

  getProjectsById(id: string): Project | undefined {
    return this.getProjects()?.find(project => project.id === id);
  }

}
