
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
              categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
                title: {
                    text: 'Month'
                }
            },
            yAxis: {
                title: {
                    text: '£ spent'
                },
                tickInterval: 10000,
                endOnTick: false
            },
            plotOptions: {
            },
            series: [{
                name: '2017',
                data: [30000, 40500, 50000, 30500, 40000, 20000, 45000, 60000, 30000, 45000, 50000, 30000]
            }],
            legend: {
              enabled: false
            },
            credits: {
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
            colors: ['#F9D86F' /*yellow*/, '#5695E1' /*blue*/, '#EE5F5E' /*red*/, '#5FB177' /*green*/],
            xAxis: {
              categories: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
              title: {
                  text: 'Month'
              }
            },
            yAxis: {
                title: {
                    text: '# of Days'
                },
                tickInterval: 5,
                endOnTick: false
            },
            series: [{
              name: '2017',
              data: [19, 22, 15, 17, 24, 11, 17, 19, 22, 24, 12, 18]
            }],
            legend: {
              enabled: false
            },
            credits: {
                enabled: false
            }
        });
    });

    //SKILLS Usage CHART
    $(function () {
      var myChart = Highcharts.chart('skillsbar', {
            chart: {
                backgroundColor: '#1D2229',
                type: 'bar'
            },
            title: {
                text: null
            },
            colors: ['#BEBEBE'],
            xAxis: {
              categories: ['Project Manager', 'Business Analyst', '.NET developer', 'Sales Consultant', 'Agile Specialist', 'Infrastructure Engineer'],
              title: {
                  text: null
              },
              labels: {
                  align: 'right',
                  style: {
                      color: 'white',
                  }
              }
            },
            yAxis: {
                title: {
                    text: '# of Days'
                },
                tickInterval: 30,
                endOnTick: false,
                visible: false
            },
            series: [{
              name: '2017',
              data: [22, 18, 9, 17, 18, 10],
              dataLabels: {
                enabled: true,
                color: '#fff'
            }
            }],
            legend: {
              enabled: false
            },
            credits: {
                enabled: false
            }
        });
    });
