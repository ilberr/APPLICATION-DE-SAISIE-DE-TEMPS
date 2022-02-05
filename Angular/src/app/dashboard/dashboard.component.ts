import { Component, OnInit } from '@angular/core';
//import { startOfDay, endOfDay, format} from 'date-fns';
import { faClipboard, faHome, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
//  Voici le composant parent.
// Les informations peuvent être transmises entre les composants parent et enfant.

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  faClipboard = faClipboard;
  faCog = faCog;
  faHome = faHome;
  faQuestionCircle = faQuestionCircle;
  // L'identité ici peut être déterminée par 
  // l'identité de l'utilisateur accédant au backend.
  isEmployee = true; 
  isManager = false;
  isAdmin = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
