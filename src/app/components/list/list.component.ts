import { Component, OnInit } from '@angular/core';
import { faTrashAlt,faPenAlt,faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPenAlt=faPenAlt;
  // faPlus=faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
