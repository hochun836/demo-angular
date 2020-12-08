import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { option1 } from './data';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    Highcharts.chart('container1', option1);
  }
}
