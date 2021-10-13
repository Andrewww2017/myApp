import { Injectable } from '@angular/core';
import { courses } from '..//app/courseArray';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses() {
    return courses;
  }
}