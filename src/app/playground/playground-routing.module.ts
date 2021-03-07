import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Func0010Component } from '../func/func0010/func0010.component';
import { Func0020Component } from '../func/func0020/func0020.component';
import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
  {
    path: '', component: PlaygroundComponent, children: [

      { path: 'func0010', component: Func0010Component, },
      { path: 'func0020', component: Func0020Component, },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
