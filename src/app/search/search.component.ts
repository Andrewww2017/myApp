import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public faPlus = faPlus;
  public search: string = '';
  constructor() { }
  ngOnInit(): void {
  }
  searchBtn(): void {
   console.log(this.search);
   this.search='';
  }
}
