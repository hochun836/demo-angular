import { NgModule } from '@angular/core';
import { Func0010Component } from '../func/func0010/func0010.component';
import { Func0020Component } from '../func/func0020/func0020.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';

@NgModule({
  declarations: [
    PlaygroundComponent,
    HeaderComponent,
    Func0010Component,
    Func0020Component,
  ],
  imports: [
    SharedModule,
    PlaygroundRoutingModule,
  ]
})
export class PlaygroundModule { }
