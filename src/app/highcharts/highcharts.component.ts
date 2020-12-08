import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AppComponent } from '../app.component';
import options from './options';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let Export = require('highcharts/modules/exporting');
let Drilldown = require('highcharts/modules/drilldown');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
Export(Highcharts);
Drilldown(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {

  exampleNo = 0;

  constructor(
    private appComponent: AppComponent,
  ) { }

  ngOnInit() {
  }

  doClick(i: number) {
    // Highcharts.chart('container', options[i]);
    this.appComponent.zone.runOutsideAngular(() => {
      Highcharts.chart('container', options[i]);
    });
  }
}
