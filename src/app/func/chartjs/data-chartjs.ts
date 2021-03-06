export const chart1Config: Chart.ChartConfiguration = {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Dataset 1',
      backgroundColor: 'rgb(111, 111, 111)',
      data: [
        10, 5, 2, 7, 9, 1, 8
      ]
    }, {
      label: 'Dataset 2',
      backgroundColor: 'rgb(222, 222, 222)',
      data: [
        1, 2, 3, 4, 5, 6, 7
      ]
    }, {
      label: 'Dataset 3',
      backgroundColor: 'rgb(55, 55, 55)',
      data: [
        6, 1, 2, 8, 7, 5, 10
      ]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked'
    },
    tooltips: {
      mode: 'index',
      intersect: false
    },
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
};
