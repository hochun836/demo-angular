import { format } from 'date-fns';
import { data1_1, data1_2, data2_1, data2_2, data2_3, data2_4, data2_5, data3, data6_1, data6_drill_1, data6_drill_2, data6_drill_3, data6_drill_4, data6_drill_5, data6_drill_6 } from './datas';

const option1: any = {
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
      data: data1_1,
    },
    {
      name: '不正常',
      turboThreshold: 500000,
      data: data1_2,
    }
  ]
};

const option2: any = {
  title: {
    text: '範例 2'
  },
  subtitle: {
    text: '資料來源: 測試資料'
  },
  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 2010 to 2017'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  series: [{
    name: 'Installation',
    data: data2_1
  }, {
    name: 'Manufacturing',
    data: data2_2
  }, {
    name: 'Sales & Distribution',
    data: data2_3
  }, {
    name: 'Project Development',
    data: data2_4
  }, {
    name: 'Other',
    data: data2_5
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
};

const option3: any = {
  chart: {
    type: 'area',
    zoomType: 'x',
    panning: true,
    panKey: 'shift',
    scrollablePlotArea: {
      minWidth: 600
    }
  },
  caption: {
    text: 'This chart uses the Highcharts Annotations feature to place labels at various points of interest. The labels are responsive and will be hidden to avoid overlap on small screens.'
  },
  title: {
    text: '範例 3'
  },
  accessibility: {
    description: 'Image description: An annotated line graph illustrates the 8th stage of the 2017 Tour de France cycling race from the start point in Dole to the finish line at Station des Rousses. Altitude is plotted on the Y-axis at increments of 500m and distance is plotted on the X-axis in increments of 25 kilometers. The line graph is interactive, and the user can trace the altitude level at every 100-meter point along the stage. The graph is shaded below the data line to visualize the mountainous altitudes encountered on the 187.5-kilometre stage. The three largest climbs are highlighted at Col de la Joux, Côte de Viry and the final 11.7-kilometer, 6.4% gradient climb to Montée de la Combe de Laisia Les Molunes which peaks at 1200 meters above sea level. The stage passes through the villages of Arbois, Montrond, Bonlieu, Chassal and Saint-Claude along the route.'
  },
  credits: {
    enabled: false
  },
  annotations: [{
    labelOptions: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      verticalAlign: 'top',
      y: 15
    },
    labels: [{
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 27.98,
        y: 255
      },
      text: 'Arbois'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 45.5,
        y: 611
      },
      text: 'Montrond'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 63,
        y: 651
      },
      text: 'Mont-sur-Monnet'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 84,
        y: 789
      },
      x: -10,
      text: 'Bonlieu'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 129.5,
        y: 382
      },
      text: 'Chassal'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 159,
        y: 443
      },
      text: 'Saint-Claude'
    }]
  }, {
    labels: [{
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 101.44,
        y: 1026
      },
      x: -30,
      text: 'Col de la Joux'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 138.5,
        y: 748
      },
      text: 'Côte de Viry'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 176.4,
        y: 1202
      },
      text: 'Montée de la Combe<br>de Laisia Les Molunes'
    }]
  }, {
    labelOptions: {
      shape: 'connector',
      align: 'right',
      justify: false,
      crop: true,
      style: {
        fontSize: '0.8em',
        textOutline: '1px white'
      }
    },
    labels: [{
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 96.2,
        y: 783
      },
      text: '6.1 km climb<br>4.6% on avg.'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 134.5,
        y: 540
      },
      text: '7.6 km climb<br>5.2% on avg.'
    }, {
      point: {
        xAxis: 0,
        yAxis: 0,
        x: 172.2,
        y: 925
      },
      text: '11.7 km climb<br>6.4% on avg.'
    }]
  }],
  xAxis: {
    labels: {
      format: '{value} km'
    },
    minRange: 5,
    title: {
      text: 'Distance'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 187.8km.'
    }
  },
  yAxis: {
    startOnTick: true,
    endOnTick: false,
    maxPadding: 0.35,
    title: {
      text: null
    },
    labels: {
      format: '{value} m'
    }
  },
  tooltip: {
    headerFormat: 'Distance: {point.x:.1f} km<br>',
    pointFormat: '{point.y} m a. s. l.',
    shared: true
  },
  legend: {
    enabled: false
  },
  series: [{
    accessibility: {
      keyboardNavigation: {
        enabled: false
      }
    },
    data: data3,
    lineColor: 'red',
    color: 'blue',
    fillOpacity: 0.5,
    name: 'Elevation',
    marker: {
      enabled: false
    },
    threshold: null
  }]
};

const option4: any = {
  chart: {
    type: 'bar'
  },
  title: {
    text: '範例 4'
  },
  subtitle: {
    text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' millions'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Year 1800',
    data: [107, 31, 635, 203, 2]
  }, {
    name: 'Year 1900',
    data: [133, 156, 947, 408, 6]
  }, {
    name: 'Year 2000',
    data: [814, 841, 3714, 727, 31]
  }, {
    name: 'Year 2016',
    data: [1216, 1001, 4436, 738, 40]
  }]
};

const option5: any = {
  chart: {
    type: 'bar'
  },
  title: {
    text: '範例 5'
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption'
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'John',
    data: [5, 3, 4, 7, 2]
  }, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1]
  }, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5]
  }]
};

const option6: any = {
  chart: {
    type: 'pie'
  },
  title: {
    text: '範例 6'
  },
  subtitle: {
    text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  accessibility: {
    announceNewData: {
      enabled: true
    },
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.1f}%'
      }
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  series: [{
    name: "Browsers",
    colorByPoint: true,
    data: data6_1,
  }],
  drilldown: {
    series: [{
      name: "Chrome",
      id: "Chrome",
      data: data6_drill_1,
    }, {
      name: "Firefox",
      id: "Firefox",
      data: data6_drill_2,
    }, {
      name: "Internet Explorer",
      id: "Internet Explorer",
      data: data6_drill_3,
    }, {
      name: "Safari",
      id: "Safari",
      data: data6_drill_4,
    }, {
      name: "Edge",
      id: "Edge",
      data: data6_drill_5
    }, {
      name: "Opera",
      id: "Opera",
      data: data6_drill_6
    }]
  }
};

export default {
  1: option1,
  2: option2,
  3: option3,
  4: option4,
  5: option5,
  6: option6,
};
