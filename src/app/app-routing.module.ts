import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { YoutubeComponent } from './youtube/youtube.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'google-map', component: GoogleMapComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'angular-material', component: AngularMaterialComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
