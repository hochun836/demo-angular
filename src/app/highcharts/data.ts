import { format } from 'date-fns';

export const option1: any = {
  chart: {
    type: 'scatter',
    height: 700
  },
  title: {
    text: '範例 1'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    formatter: function () {
      return 'x: ' + format(this.x, 'yyyy-MM-dd HH:mm:ss') + '<br>' +
        'y: ' + this.y.toFixed(2);
    }
  },
  xAxis: {
    type: 'datetime',
    labels: {
      formatter: function () {
        return format(this.value, 'yyyy-MM-dd');
      }
    }
  },
  series: [
    {
      name: '正常',
      turboThreshold: 500000,
      data: [[new Date('2018-01-25 12:34:56').getTime(), 2]]
    },
    {
      name: '不正常',
      turboThreshold: 500000,
      data: [[new Date('2018-02-05 01:23:45').getTime(), 7]]
    }
  ]
};
