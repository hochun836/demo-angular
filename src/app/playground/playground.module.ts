import { NgModule } from '@angular/core';
import { Func0010Component } from '../func/func0010/func0010.component';
import { Func0020Component } from '../func/func0020/func0020.component';
import { Func0030Component } from '../func/func0030/func0030.component';
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
    Func0030Component,
  ],
  imports: [
    SharedModule,
    PlaygroundRoutingModule,
  ]
})
export class PlaygroundModule { }
