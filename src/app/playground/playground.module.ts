import { NgModule } from '@angular/core';
import { Func0010Component } from '../func/func0010/func0010.component';
import { Func0020Component } from '../func/func0020/func0020.component';
import { Func9999Component } from '../func/func9999/func9999.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { WelcomeComponent } from './welcome.component';
@NgModule({
  declarations: [
    PlaygroundComponent,
    HeaderComponent,
    WelcomeComponent,
    Func0010Component,
    Func0020Component,
    Func9999Component,
  ],
  imports: [
    SharedModule,
    PlaygroundRoutingModule,
  ]
})
export class PlaygroundModule { }
