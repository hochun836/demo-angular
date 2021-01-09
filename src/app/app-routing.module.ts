import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { CdkComponent } from './cdk/cdk.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HammerjsComponent } from './hammerjs/hammerjs.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MemberComponent } from './member/member.component';
import { ProfileComponent } from './member/profile.component';
import { RegisterComponent } from './member/register.component';
import { SettingComponent } from './member/setting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReferenceComponent } from './reference/reference.component';
import { RouteReuseComponent } from './route-reuse/route-reuse.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { ToolComponent } from './tool/tool.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: 'main', component: MainComponent, data: { breadcrumb: '首頁', reuse: false } },
  { path: 'login', component: LoginComponent, data: { breadcrumb: '登入頁面', reuse: false } },
  { path: 'google-map', component: GoogleMapComponent, data: { breadcrumb: 'Google Map', reuse: false } },
  { path: 'youtube', component: YoutubeComponent, data: { breadcrumb: 'Youtube', reuse: false } },
  { path: 'angular-material', component: AngularMaterialComponent, data: { breadcrumb: 'Angular Material', reuse: false } },
  { path: 'cdk', component: CdkComponent, data: { breadcrumb: 'Cdk', reuse: false } },
  {
    path: 'member', component: MemberComponent, data: { breadcrumb: '會員中心', reuse: false }, children: [
      { path: 'register', component: RegisterComponent, data: { breadcrumb: '註冊', reuse: false } },
      { path: 'profile', component: ProfileComponent, data: { breadcrumb: '個人頁面', reuse: false } },
      { path: 'setting', component: SettingComponent, data: { breadcrumb: '設定', reuse: false } },
    ]
  },
  { path: 'lifecycle', component: LifecycleComponent, data: { breadcrumb: '生命週期', reuse: false } },
  { path: 'change-detection', component: ChangeDetectionComponent, data: { breadcrumb: '變化偵測', reuse: false } },
  { path: 'highcharts', component: HighchartsComponent, data: { breadcrumb: 'Highcharts', reuse: false } },
  { path: 'chartjs', component: ChartjsComponent, data: { breadcrumb: 'Chart.js', reuse: false } },
  { path: 'hammerjs', component: HammerjsComponent, data: { breadcrumb: 'Hammer.js', reuse: false } },
  { path: 'scrollbar', component: ScrollbarComponent, data: { breadcrumb: 'Scrollbar', reuse: false } },
  { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard', reuse: false } },
  { path: 'route-reuse', component: RouteReuseComponent, data: { breadcrumb: '路由複用', reuse: true } },
  { path: 'tool', component: ToolComponent, data: { breadcrumb: '工具', reuse: false } },
  { path: 'reference', component: ReferenceComponent, data: { breadcrumb: '參考', reuse: false } },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { reuse: false } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
