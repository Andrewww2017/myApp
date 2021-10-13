import { Component, OnInit } from '@angular/core';
import { ICourse } from './../models/Course';
import { CoursesService } from '../courseArray.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  public courses: ICourse[]=[];
  loadMore(): void {
    console.log('load more');
  }
  constructor(public courseService:CoursesService) {  }
  ngOnInit(): void {
    this.courses = this.courseService.getCourses()
    console.log('string') 
  }
}


