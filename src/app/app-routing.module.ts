import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';
import { ProfileComponent } from './components/screens/profile/profile.component';
import { Screen1Component } from './components/screens/screen1/screen1.component';
import { Screen2Component } from './components/screens/screen2/screen2.component';
import { SettingComponent } from './components/screens/setting/setting.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'screen1', component: Screen1Component },
  { path: 'screen2', component: Screen2Component },
  { path: 'setting', component: SettingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
