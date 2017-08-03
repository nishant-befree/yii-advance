Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Open Sans'
        }
    }
});

/* Current Jobs Chart*/
$(function () {
        $('#currentjobsgraphcontainer').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Current Jobs'
            },
            subtitle: {
                text: '2014'
            },
            xAxis: {
                categories: [
                    'SMSF Compliance',
                    'SMSF Audit',
                    'SMSF Setup',
                    'Tax Returns',
                    'Book Keeping'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Total Jobs',
                data: [49.9, 71.5, 106.4, 129.2, 144.0]
    
            }, {
                name: 'Pending Jobs',
                data: [83.6, 78.8, 98.5, 93.4, 106.0]  
    
            }]
        });
    });

/* Clients Chart*/
$(function () {
        $('#clientgraphcontainer').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Clients'
            },
            subtitle: {
                text: '2014'
            },
            xAxis: {
                categories: [
                    'SMSF',
                    'COMPANY',
                    'Trust',
                    'Partnership',
                    'Individual'
                ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Clients',
				plotBackgroundColor: '#00FF00',
                data: [49.9, 71.5, 106.4, 129.2, 144.0]
    
            }
			]
        });
    });

/* Jobs Pie Chart*/
$(function () {
    var chart;
    
    $(document).ready(function () {
    	
    	// Build the chart
        $('#jobspiecontainer').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: 'Jobs'
            },
			subtitle: {
                text: '2014'
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'Browser share',
                data: [
                     {
                    name: 'Completed Jobs',
                    y: 75,
                    sliced: true,
                    selected: true
                },
                ['Pending Jobs',    35]
                ]
            }]
        });
    });
    
});