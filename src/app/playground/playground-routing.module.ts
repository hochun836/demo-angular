import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Func0010Component } from '../func/func0010/func0010.component';
import { Func0020Component } from '../func/func0020/func0020.component';
import { Func0030Component } from '../func/func0030/func0030.component';
import { PlaygroundComponent } from './playground.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '', component: PlaygroundComponent, children: [

      { path: '', component: WelcomeComponent, },
      { path: 'func0010', component: Func0010Component, },
      { path: 'func0020', component: Func0020Component, },
      { path: 'func0030', component: Func0030Component, },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
