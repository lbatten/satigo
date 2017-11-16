
Highcharts.theme = {
    colors: ['#5FB177' /*green*/, '#F9D86F' /*yellow*/, '#5695E1' /*blue*/, '#EE5F5E' /*red*/],

    title: {
        style: {
            color: '#fff',
            font: 'bold 16px "Oswald", Verdana, sans-serif'
        }
    },

    legend: {
        itemStyle: {
            font: '9pt Oswald, Verdana, sans-serif',
            color: 'white'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    }
    };

    // Apply the theme
    Highcharts.setOptions(Highcharts.theme);

    //VALUE CHART
    $(function () {
      var myChart = Highcharts.chart('valuebar', {
            chart: {
              backgroundColor: '#1D2229',
              type: 'column'
            },
            title: {
              text: null
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: '£ spent'
                }
            },
            plotOptions: {
            },
            series: [{
                name: '2017',
                data: [30000, 40000, 50000, 30000, 40000, 20000, 40000, 60000, 30000, 40000, 50000, 30000]
            }],
            legend: {
              enabled: false
            }

        });
    });

    //BILLABLE DAYS CHART
    $(function () {
      var myChart = Highcharts.chart('billablebar', {
            chart: {
                backgroundColor: '#1D2229',
                type: 'column'
            },
            title: {
                text: null
            },
            xAxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              title: {
                  text: 'Month'
              }
            },
            yAxis: {
                title: {
                    text: '# of Days'
                }
            },
            series: [{
              name: 'Jane',
              data: [19, 22, 15, 17, 24, 11, 17, 19, 22, 24, 12, 18]
            }],
            legend: {
              enabled: false
            }
        });
    });
