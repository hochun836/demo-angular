import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkDemo1Component } from './cdk/cdk-demo1.component';
import { CdkDemo2Component } from './cdk/cdk-demo2.component';
import { CdkDemo3Component } from './cdk/cdk-demo3.component';
import { CdkComponent } from './cdk/cdk.component';
import { ChangeDetectionInnerComponent } from './change-detection/change-detection-inner.component';
import { ChangeDetectionOutterComponent } from './change-detection/change-detection-outter.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { CustomRouteReuseStrategy } from './custom-route-reuse-strategy';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleMapComponent } from './google-map/google-map.component';
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
import { SharedMaterialModule } from './shared-material.module';
import { ToolComponent } from './tool/tool.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { RouteReuseComponent } from './route-reuse/route-reuse.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    MainComponent,
    GoogleMapComponent,
    YoutubeComponent,
    AngularMaterialComponent,
    MemberComponent,
    RegisterComponent,
    ProfileComponent,
    SettingComponent,
    HighchartsComponent,
    DashboardComponent,
    CdkComponent,
    CdkDemo1Component,
    CdkDemo2Component,
    CdkDemo3Component,
    ChangeDetectionComponent,
    ChangeDetectionInnerComponent,
    ChangeDetectionOutterComponent,
    LifecycleComponent,
    ReferenceComponent,
    ToolComponent,
    RouteReuseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleMapsModule,
    YouTubePlayerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    FormsModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
