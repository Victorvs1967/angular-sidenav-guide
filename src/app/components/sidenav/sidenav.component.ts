import { Component, HostBinding, HostListener, inject } from '@angular/core';
import { faHouse, faCog, faUserCircle, faDesktop, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from 'src/app/services/sidenav.service';

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
  faAngleLeft = faAngleLeft;

  sidenavService = inject(SidenavService);

  resizingEvent = {
    isResizing: false,
    startingCursorX: 0,
    startingWidth: 0,
  };

  startResizing(event: MouseEvent): void {
    this.resizingEvent = {
      isResizing: true,
      startingCursorX: event.clientX,
      startingWidth: this.sidenavService.sidenavWidth
    };
  }

  @HostListener('window:mousemove', ['$event'])
  updateSidenavWidth(event: MouseEvent) {
    if (this.resizingEvent.isResizing) {
      const cursorDeltaX = event.clientX - this.resizingEvent.startingCursorX;
      const newWidth = this.resizingEvent.startingWidth + cursorDeltaX;
      this.sidenavService.setSidenavWidth(newWidth);
    }
    return;
  }

  @HostListener('window:mouseup')
  stopResizing() {
    this.resizingEvent.isResizing = false;
  }

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidenavService.isExpanded;
  }
}
