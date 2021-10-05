import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faPenAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPenAlt = faPenAlt;
  arrCourses: Array<any> = [
    {
      courseTitle: 'Video course 1. Name tag.',
      courseText: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo, recusandae voluptates nemo quia
    fugit blanditiis aliquam. Ut consequuntur voluptatem odio eaque tempore repudiandae natus vero. Debitis
    harum sit quae!`,
      date: new Date(2016,10,3),
    },
    {
      courseTitle: 'Video course 1. Name tag.',
      courseText: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo, recusandae voluptates nemo quia
    fugit blanditiis aliquam. Ut consequuntur voluptatem odio eaque tempore repudiandae natus vero. Debitis
    harum sit quae!`,
      date: new Date(2016,10,3),
    },
    {
      courseTitle: 'Video course 1. Name tag.',
      courseText: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo, recusandae voluptates nemo quia
    fugit blanditiis aliquam. Ut consequuntur voluptatem odio eaque tempore repudiandae natus vero. Debitis
    harum sit quae!`,
      date: new Date(2016,10,3),
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
