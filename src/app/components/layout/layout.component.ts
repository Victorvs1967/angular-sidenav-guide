import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, inject } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { DefaultSidenavComponent } from '../default-sidenav/default-sidenav.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass']
})
export class LayoutComponent implements AfterViewInit, OnDestroy {

  sidenabService = inject(SidenavService);
  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit(): void {
    this.sidenabService.push(DefaultSidenavComponent);
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.sidenabService.pop();
  }

}
