import { Component, HostBinding, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { SidenavContentAreaDirective } from 'src/app/directives/sidenav-content-area.directive';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {
  faAngleLeft = faAngleLeft;

  sidenavService = inject(SidenavService);

  @ViewChild(SidenavContentAreaDirective, { static: true })
  sidenavContentArea?: SidenavContentAreaDirective;

  resizingEvent = {
    isResizing: false,
    startingCursorX: 0,
    startingWidth: 0,
  };

  ngOnInit(): void {
    if (!this.sidenavContentArea) throw new Error('sideNavContentArea is undefined...');
    this.sidenavService.setDynamicContentArea(this.sidenavContentArea);
  }

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
