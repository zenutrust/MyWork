/*
Template Name: Minia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Dashboard Init Js File
*/

//const { removeData } = require("jquery");

// get colors array from the string
function getChartColorsArray(chartId) {
    var colors = $(chartId).attr('data-colors');
    var colors = JSON.parse(colors);
    return colors.map(function(value){
        var newValue = value.replace(' ', '');
        if(newValue.indexOf('--') != -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if(color) return color;
        } else {
            return newValue;
        }
    })
}


// weekly-seminar
var piechartColors = getChartColorsArray("#weekly-seminar");
var options = {
    series: [],
    
    chart: {
        width: 227,
        height: 227,
        type: 'pie',
    },
    dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'giloryregular',
           
        },
        dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 0,
            color: 'transparent',
            opacity: 0.45
        }
    },
    noData: {
        
        text:'Weekly seminar',
       
        align: "center",
        verticalAlign: "middle",

        style: {
            color: undefined,
            fontSize: '14px',
            fontFamily: 'giloryregular',
        },
       
        
    },
   
    labels: ['Firas Monzer', 'Firas Hachache', 'Noura Mikati', 'Areej', 'Michella', 'Czarina Villaflores'],
    colors: piechartColors,
    stroke: {
        width: 0,
    },
    legend: {
        show: false
    },
    
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#weekly-seminar"), options);
chart.render();
// 

// Leads
var piechartColors = getChartColorsArray("#leads");
var options = {
    //dataLabels: {
       // textAnchor: 'middle',
        //position: 'center',
       // distributed: false,
    //},
    dataLabels: {
        enabled: true,
        textAnchor: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '12px',
            fontFamily: 'giloryregular',
           
        },
        dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 0,
            color: 'transparent',
            opacity: 0.45
        }
    },
    series: [35, 70, 15,20,21],
    chart: {
        width: 171,
        height: 200,
        type: 'pie',
    },
    labels: ['Spoken', 'Resolved', 'Busy','Noreplay', 'Wrong Calls'],
    colors: piechartColors,
    stroke: {
        width: 0,
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#leads"), options);
chart.render();
// weekly-seminar
//var piechartColors = getChartColorsArray("#weekly-seminar");

function renderChart($series,$id,$catogories){

//column chart1  live_accounts
var columnColors = getChartColorsArray($id);
var options = {
    chart: {
        height: 300,
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: $series,
    colors: columnColors,
    xaxis: {
        categories: $catogories,
        labels: {
        trim: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        maxHeight: 60,

        style: {
            //colors: '#5B5B5B',
            fontSize: '12px',
            fontFamily: 'gilroymedium',
            
            //cssClass: 'gilroymedium-type text-muted',
        },
        }
    },
    yaxis: {
        title: {
            text: '',
            style: {
                fontFamily: 'gilroymedium',
              },
        }
    },
    grid: {
        borderColor: '#f1f1f1',
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return  + val + " "
            }
        }
    }
}

var chart = new ApexCharts(
    document.querySelector($id),
    
    options
);

chart.render(); 
    
}
//rerenderChart($series,$time);
renderChart([{
    
    name: ' ',
    data: [0, 1, 0, 0, 2, 0, 9]
}], '#column_chart_live_accounts',['Firas Monzer', 'Firas Hachache', 'Noura Mikati', 'Areej', 'Michella', 'Czarina Villaflores', 'Online']);


renderChart([{
    
    name: ' ',
    data: [37, 42, 38, 26, 47, 0, 54]
}], '#column_chart_live_accounts1',['Firas Monzer', 'Firas Hachache', 'Noura Mikati', 'Areej', 'Michella', 'Czarina Villaflores', 'Online']);


function switchtab($this,$displaytab,$hiddentab) {
    $($displaytab).addClass('d-block');
 
    $($displaytab).removeClass('d-none');
    $($hiddentab).addClass('d-none');
    $($hiddentab).removeClass('d-block');  
   
    
    
}
 /*
function rerenderChart($series){

    $('#column_chart_live_accounts svg').css('display','none');
    $('#column_chart_live_accounts ').css('height','320px');
    renderChart($series);
    setTimeout(() => {

        $('#column_chart_live_accounts svg').css('display','block');
        $('#column_chart_live_accounts').css('height','auto');

        
        
      }, '750')
}
    


*/

//chart.render();


//function renderChart($id){

    //var chart = new ApexCharts(
        //document.querySelector($id),
        //options
    //);
    
    //chart.render();


//}

//  Radial chart
var radialColors = getChartColorsArray("#radial_chart1");
var options = {
    chart: {
        height: 252,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            
            dataLabels: {
                name: {
                    fontSize: '12px',
                    fontFamily: 'almarenamonolight',
                },
                value: {
                    fontSize: '16px',
                    fontFamily: 'almarenamonolight',
                },
                total: {
                    show: false,
                    label: 'Total',
                    formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        //return 249
                    }
                },
                dropShadow: {
                    enabled: false,
                }
            }
        }
    },
   
    series: [44, 55, 67, 83],
    labels: ['Accounts', 'Total accounts', 'Deposited acts', 'Pending deposit acts'],
    colors: radialColors,
    
}

var chart = new ApexCharts(
    document.querySelector("#radial_chart1"),
    options
);

chart.render();

// column chart2 liveaccount_statics
var columnColors = getChartColorsArray("#column_chart_leadsbysource");
var options = {
    chart: {
        height: 300,
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Source Count',
        data: [46, 57, 59, 54, 62, 58, 64]
    }, {
        name: 'Inquiry',
        data: [74, 83, 102, 97, 86, 106, 93]
    }

],
    colors: columnColors,
    xaxis: {
    categories: ['Web Demo', 'FB Messenger Leads', 'CFB Promo Account Reg', 'Promo Account Reg', 'Live Account Reg', 'UAE Campaign 07/2022', 'Demo Account'],

    labels: {
        trim: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        maxHeight: 60,

        style: {
            //colors: '#5B5B5B',
            fontSize: '12px',
            fontFamily: 'gilroyregular',
            
            //cssClass: 'gilroymedium-type text-muted',
        },
    }
    },
    yaxis: {
        title: {
            text: ' ',
            style: {
                fontSize: '12px',
                fontFamily: 'gilroyregular',
              },
        }
    },
    grid: {
        borderColor: '#f1f1f1',
    },
    fill: {
        opacity: 1

    },
    tooltip: {
        y: {
            formatter: function (val) {
                return  + val + " "
            }
        }
    }
}
var chart = new ApexCharts(
    document.querySelector("#column_chart_leadsbysource"),
    options
);
chart.render();

// Donut chart
var donutColors = getChartColorsArray("#donut_chart_ticketdialed");
var options = {
    dataLabels: {
        enabled:false,
    },
    plotOptions: {
        pie: {
          expandOnClick: false
        }
    },
  chart: {
     
      height: 186,
      //width: 186,
      type: 'donut',
      verticalAlign: 'center',
  }, 
  series: [44, 55, 41, 17, 15,10],
  labels: ['Yara Hajji Youssef', 'Amra Osman', 'Fatima Omar', 'Firas Hachache', 'Firas Monzer','Jad'],
  colors: donutColors,
  legend: {
      show: true,
      position: 'right',
      horizontalAlign: 'center',
      verticalAlign: 'center',
      floating: false,
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
      offsetX: 0,

      itemMargin: {
        
        vertical: 4,
    },
  },
  responsive: [{
      breakpoint: 600,
      options: {
          chart: {
              height: 240
          },
          legend: {
              
              position: 'bottom'
          },
      }
  }]

}
var chart = new ApexCharts(
    document.querySelector("#donut_chart_ticketdialed"),
    options
  );
  chart.render()

// Donut chart
var donutColors = getChartColorsArray("#meetings_report");
var options = {
    dataLabels: {
        enabled:false,
    },
    plotOptions: {
        pie: {
          expandOnClick: false
        }
    },
  chart: {
     
      height: 220,
      //width: 186,
      type: 'donut',
      verticalAlign: 'center',
  }, 
  series: [44, 55, 41,34,55,22],
  labels: ['Firas Monzer', 'Firas Hachache', 'Noura Mikati', 'Areej', 'Michella', 'Czarina Villaflores'],
  colors: donutColors,
  legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'center',
      floating: false,
      fontSize: '14px!important',
      fontFamily: 'gilroymedium',
      offsetX: 0,

      itemMargin: {
        
        vertical: 4,
    },
  },
  responsive: [{
      breakpoint: 600,
      options: {
          chart: {
              height: 240
          },
          legend: {
              
              position: 'bottom'
          },
      }
  },

  {
    breakpoint: 1350,
    options: {
        chart: {
            height: 240
        },
        legend: {
            fontSize: '11px!important',
           
            
            position: 'bottom'
        },
    },
}


]

}
var chart = new ApexCharts(
  document.querySelector("#meetings_report"),
  options
);
chart.render()
//   spline_area
var splneAreaColors = getChartColorsArray("#spline_area");
var options = {
    chart: {
        height: 350,
        type: 'area',
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    series: [{
        name: 'series1',
        data: [34, 40, 28, 52, 42, 109, 100]
    }, {
        name: 'series2',
        data: [32, 60, 34, 46, 34, 52, 41]
    }],
    colors: splneAreaColors,
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
    },
    grid: {
        borderColor: '#f1f1f1',
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
}

var chart = new ApexCharts(
    document.querySelector("#spline_area"),
    options
);



chart.render();














