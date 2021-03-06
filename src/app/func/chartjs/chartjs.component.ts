import { Component, NgZone, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import ChartAnnotation from 'chartjs-plugin-annotation';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { chart1Config } from './data-chartjs';

Chart.plugins.register(ChartDataLabels);
Chart.plugins.register(ChartAnnotation);

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  chart1;

  constructor(
    private zone: NgZone,
  ) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.chart1 = new Chart('chart1', chart1Config);
    });
  }

}
