import { Component, NgZone, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { option1 } from './data';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let Export = require('highcharts/modules/exporting');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
Export(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit(){
    this.zone.onUnstable.subscribe(() => { console.log('# 事件發生了') });
    this.zone.onStable.subscribe(() => { console.log('@ 事件結束了') });
    Highcharts.chart('container1', option1);
  }
}
