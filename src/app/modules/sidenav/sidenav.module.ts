import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavRoutingModule } from './sidenav-routing.module';
import { HomeComponent } from 'src/app/components/screens/home/home.component';
import { ProfileComponent } from 'src/app/components/screens/profile/profile.component';
import { Screen1Component } from 'src/app/components/screens/screen1/screen1.component';
import { Screen2Component } from 'src/app/components/screens/screen2/screen2.component';
import { SettingComponent } from 'src/app/components/screens/setting/setting.component';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { SidenavLinkComponent } from 'src/app/components/sidenav-link/sidenav-link.component';
import { UiModule } from '../ui/ui.module';

const SCREENS = [
  HomeComponent,
  ProfileComponent,
  Screen1Component,
  Screen2Component,
  SettingComponent,
];

@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    SidenavLinkComponent,
    ...SCREENS,
  ],
  imports: [
    CommonModule,
    SidenavRoutingModule,
    UiModule,
  ]
})
export class SidenavModule { }
