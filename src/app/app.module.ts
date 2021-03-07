import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from "@angular/router";
import { YouTubePlayerModule } from "@angular/youtube-player";
import 'hammerjs';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomRouteReuseStrategy } from "./common/custom-route-reuse-strategy";
import { AngularMaterialComponent } from "./func/angular-material/angular-material.component";
import { CdkDemo1Component } from "./func/cdk/cdk-demo1.component";
import { CdkDemo2Component } from "./func/cdk/cdk-demo2.component";
import { CdkDemo3Component } from "./func/cdk/cdk-demo3.component";
import { CdkComponent } from "./func/cdk/cdk.component";
import { ChangeDetectionInnerComponent } from "./func/change-detection/change-detection-inner.component";
import { ChangeDetectionOutterComponent } from "./func/change-detection/change-detection-outter.component";
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
import { SharedModule } from "./shared/shared.module";

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponent,
    AngularMaterialComponent,
    MemberComponent,
    RegisterComponent,
    ProfileComponent,
    SettingComponent,
    HighchartsComponent,
    CdkComponent,
    CdkDemo1Component,
    CdkDemo2Component,
    CdkDemo3Component,
    ChangeDetectionComponent,
    ChangeDetectionInnerComponent,
    ChangeDetectionOutterComponent,
    LifecycleComponent,
    RouteReuseComponent,
    ChartjsComponent,
    HammerjsComponent,
    ScrollbarComponent,
    StockComponent,
    SortablejsComponent,
    SheetjsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HammerModule,
    GoogleMapsModule,
    YouTubePlayerModule,
    SharedModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
