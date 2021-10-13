import { Component, OnInit,OnChanges, SimpleChanges, EventEmitter, Output,Input } from '@angular/core';
import { faTrashAlt, faPenAlt, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { courses } from '..//..//courseArray';
import { ICourse } from './../../models/Course';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements  OnInit, OnChanges {
  public faTrashAlt = faTrashAlt;
  public faPenAlt = faPenAlt;
  public faClock = faClock;
  public faCalendarAlt = faCalendarAlt;
  public curentDate = new Date();
  public arrCourses = courses;

  @Input()
  course: ICourse={};
  @Output() editEvent = new EventEmitter<any>();
  constructor() {}
  public ngOnInit(): void {
    this.log(`ngOnInit`);
  }
  public ngOnChanges(changes: SimpleChanges) {
    this.log(`ngOnChanges`);
  }
  public editCourse() {
    this.editEvent.emit(this.course.id)
  }
  public deleteCourse():void{
    console.log('delete');
  }
  private log(msg: string) {
    console.log(`${this.course.id}.${msg}`
    );
  }
}
