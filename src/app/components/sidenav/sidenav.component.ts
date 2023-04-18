import { Component, inject } from '@angular/core';
import { faCog, faDesktop, faHouse, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent {
  faHouse = faHouse;
  faCog = faCog;
  faUserCircle = faUserCircle;
  faDesktop = faDesktop;

  sidenavService = inject(SidenavService);
}
