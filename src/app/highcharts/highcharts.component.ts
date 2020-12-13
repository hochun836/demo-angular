import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  isShowText = false;

  constructor(
    private appComponent: AppComponent,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

  show(i: number) {
    // Highcharts.chart('container', options[i]);
    this.appComponent.zone.runOutsideAngular(() => {
      Highcharts.chart('container', options[i]);
    });
  }

  interactive(i: number) {
    this.appComponent.zone.runOutsideAngular(() => {
      //====================
      const action = this.action.bind(this);
      const option = Object.assign({}, options[i]);
      option.plotOptions = {};
      option.plotOptions.series = {};
      option.plotOptions.series.cursor = 'pointer';
      option.plotOptions.series.point = {};
      option.plotOptions.series.point.events = {};
      option.plotOptions.series.point.events.click = function() {
        const point: Highcharts.Point = this;
        action(point);
      };
      //====================
      Highcharts.chart('container', option);
    });
  }

  action(point: Highcharts.Point) {
    alert('Category: ' + point.category + ', value: ' + point.y);

    // not work
    // this.isShowText = true;
    
    // work
    this.appComponent.zone.run(() => {
      this.isShowText = true;
    });
    
    // work
    // this.isShowText = true;
    // this.appComponent.zone.run(() => {});

    // not work
    // this.isShowText = true;
    // this.changeDetectorRef.markForCheck();

    // work
    // this.isShowText = true;
    // this.changeDetectorRef.detectChanges();
  }

  noop() {}
}
