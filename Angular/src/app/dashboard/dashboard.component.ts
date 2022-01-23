import { Component, OnInit } from '@angular/core';
import { faClipboard, faHome, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //expression: boolean;
  faClipboard = faClipboard;
  faCog = faCog;
  faHome = faHome;
  faQuestionCircle = faQuestionCircle;


  constructor() { }

  ngOnInit(): void {
    //this.expression = false;
  }

}
