import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavLinkComponent } from './components/sidenav-link/sidenav-link.component';
import { HomeComponent } from './components/screens/home/home.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { SettingComponent } from './components/screens/setting/setting.component';
import { Screen1Component } from './components/screens/screen1/screen1.component';
import { Screen2Component } from './components/screens/screen2/screen2.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SidenavLinkComponent,
    HomeComponent,
    ProfileComponent,
    SettingComponent,
    Screen1Component,
    Screen2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
