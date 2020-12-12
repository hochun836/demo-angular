import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import { SharedMaterialModule } from './shared-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { MemberComponent } from './member/member.component';
import { RegisterComponent } from './member/register.component';
import { ProfileComponent } from './member/profile.component';
import { SettingComponent } from './member/setting.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CdkComponent } from './cdk/cdk.component';
import { CdkDemo1Component } from './cdk/cdk-demo1.component';
import { FormsModule } from '@angular/forms';
import { CdkDemo2Component } from './cdk/cdk-demo2.component';
import { CdkDemo3Component } from './cdk/cdk-demo3.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChangeDetectionInnerComponent } from './change-detection/change-detection-inner.component';
import { ChangeDetectionOutterComponent } from './change-detection/change-detection-outter.component';

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
    ChangeDetectionOutterComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
