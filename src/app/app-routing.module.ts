import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MemberComponent } from './member/member.component';
import { ProfileComponent } from './member/profile.component';
import { RegisterComponent } from './member/register.component';
import { SettingComponent } from './member/setting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: 'main', component: MainComponent, data: { breadcrumb: '首頁' } },
  { path: 'login', component: LoginComponent, data: { breadcrumb: '登入頁面' } },
  { path: 'google-map', component: GoogleMapComponent, data: { breadcrumb: 'Google Map' } },
  { path: 'youtube', component: YoutubeComponent, data: { breadcrumb: 'Youtube' } },
  { path: 'angular-material', component: AngularMaterialComponent, data: { breadcrumb: 'Angular Material' } },
  { path: 'member', component: MemberComponent, data: { breadcrumb: '會員中心' }, children: [
    { path: 'register', component: RegisterComponent, data: { breadcrumb: '註冊' } },
    { path: 'profile', component: ProfileComponent, data: { breadcrumb: '個人頁面' } },
    { path: 'setting', component: SettingComponent, data: { breadcrumb: '設定' } },
  ] },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
