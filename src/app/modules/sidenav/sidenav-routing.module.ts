import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/screens/home/home.component';
import { ProfileComponent } from 'src/app/components/screens/profile/profile.component';
import { Screen1Component } from 'src/app/components/screens/screen1/screen1.component';
import { Screen2Component } from 'src/app/components/screens/screen2/screen2.component';
import { SettingComponent } from 'src/app/components/screens/setting/setting.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'screen1', component: Screen1Component },
      { path: 'screen2', component: Screen2Component },
      { path: 'settings', component: SettingComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidenavRoutingModule { }
