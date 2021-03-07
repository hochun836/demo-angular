import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AngularMaterialComponent } from "./func/angular-material/angular-material.component";
import { CdkComponent } from "./func/cdk/cdk.component";
import { ChangeDetectionComponent } from "./func/change-detection/change-detection.component";
import { ChartjsComponent } from "./func/chartjs/chartjs.component";
import { HammerjsComponent } from "./func/hammerjs/hammerjs.component";
import { HighchartsComponent } from "./func/highcharts/highcharts.component";
import { LifecycleComponent } from "./func/lifecycle/lifecycle.component";
import { MainComponent } from "./func/main/main.component";
import { MemberComponent } from "./func/member/member.component";
import { ProfileComponent } from "./func/member/profile.component";
import { RegisterComponent } from "./func/member/register.component";
import { SettingComponent } from "./func/member/setting.component";
import { PageNotFoundComponent } from "./func/page-not-found/page-not-found.component";
import { RouteReuseComponent } from "./func/route-reuse/route-reuse.component";
import { ScrollbarComponent } from "./func/scrollbar/scrollbar.component";
import { SheetjsComponent } from "./func/sheetjs/sheetjs.component";
import { SortablejsComponent } from "./func/sortablejs/sortablejs.component";
import { StockComponent } from "./func/stock/stock.component";

const routes: Routes = [
  { path: 'main', component: MainComponent, data: { breadcrumb: '首頁', reuse: false } },
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
  { path: 'route-reuse', component: RouteReuseComponent, data: { breadcrumb: '路由複用', reuse: true } },
  { path: 'stock', component: StockComponent, data: { breadcrumb: '證券', reuse: false } },
  { path: 'sortable-js', component: SortablejsComponent, data: { breadcrumb: 'SortableJS', reuse: false } },
  { path: 'sheet-js', component: SheetjsComponent, data: { breadcrumb: 'SheetJS', reuse: false } },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { reuse: false } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
