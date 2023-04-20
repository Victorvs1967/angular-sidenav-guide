import { Component } from '@angular/core';
import { faHouse, faCog, faUserCircle, faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-default-sidenav',
  templateUrl: './default-sidenav.component.html',
  styleUrls: ['./default-sidenav.component.sass']
})
export class DefaultSidenavComponent {
  faHouse = faHouse;
  faCog = faCog;
  faUserCircle = faUserCircle;
  faDesktop = faDesktop;
}
