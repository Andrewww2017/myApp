import { Component, OnInit } from '@angular/core';
import { faUserAlt,faSignInAlt,faPlayCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUserAlt=faUserAlt;
  faSignInAlt=faSignInAlt;
  faPlayCircle=faPlayCircle;


  constructor() { }

  ngOnInit(): void {
  }

}
// <i class="fa-regular fa-trash-can"></i>