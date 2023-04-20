import { Component, inject } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';
import { SettingSidenavComponent } from '../../setting-sidenav/setting-sidenav.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.sass']
})
export class SettingComponent {

  sidenavService = inject(SidenavService);

  ngAfterViewInit(): void {
    this.sidenavService.push(SettingSidenavComponent);
  }

  ngOnDestroy(): void {
    this.sidenavService.pop();
  }

}
