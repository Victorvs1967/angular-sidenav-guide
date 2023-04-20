import { Component } from '@angular/core';
import { faArrowLeft, faShieldAlt, faUserAlt, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-setting-sidenav',
  templateUrl: './setting-sidenav.component.html',
  styleUrls: ['./setting-sidenav.component.sass']
})
export class SettingSidenavComponent {
  faArrowLeft = faArrowLeft;
  faUserAlt = faUserAlt;
  faShieldAlt = faShieldAlt;
  faBell = faBell;
}
