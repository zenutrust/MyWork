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


// Donut chart #meetings_report
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
      height: '100%',
      type: 'donut',
      verticalAlign: 'left',
  }, 
  stroke: {
    show: false,
    width: 0
    },
  series: [44, 55, 41,34,55,22],
  labels: ['Firas Monzer', 'Firas Hachache', 'Noura Mikati', 'Areej', 'Michella', 'Czarina Villaflores'],
  colors: donutColors,
  legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'left',
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
      breakpoint: 1550,
      options: {
          chart: {
              height: '110%',
          },
          legend: {
              
              position: 'bottom',
              verticalAlign: 'left',
              floating: false,
              offsetX: 0,
              offsetY: 0,
              itemMargin: {
        
                vertical: 1,
                horizontal: 4,
            },
          },
      }
  },

  {
    breakpoint: 1350,
    options: {
        chart: {
        },
        legend: {
            offsetX: 0,
            offsetY: 0,
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

// column chart2 liveaccount_statics
var columnColors = getChartColorsArray("#column_chart_leadsbysource");
var options = {
    chart: {
        height: '110%',
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '25',  
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: false,
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

        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        lines: {
            
            show: true,
            opacity: 0.5,
        },    
    categories: ['Web Demo', 'FB Messenger Leads', 'CFB Promo Account Reg', 'Promo Account Reg', 'Live Account Reg', 'UAE Campaign 07/2022', 'Demo Account'],

    labels: {
        trim: true,
        rotate: -20,
        rotateAlways: false,
        hideOverlappingLabels: true,
        maxHeight: 80,
        style: {
            
            fontSize: '12px',
            fontFamily: 'gilroyregular',
           
        },
    },
  
    },
    yaxis: {
        lines: {
            show: false,
        }
    },
    grid: {
        borderColor: '#333550',
        strokeDashArray: 7,
    
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'center',
        fontSize: '14px',
        
        fontFamily: 'gilroymedium',
        offsetY: -10,

        itemMargin: {

            vertical: 0,
            horizontal: 10,
        },
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
    },

    responsive: [{
        breakpoint: 1400,
        options: {
            chart: {
                height: '100%',
            }

        }
    },
    {
        breakpoint: 1200,
        options: {
            chart: {
                height: '110%',
            }

        }
    },



],
}
var chart = new ApexCharts(
    document.querySelector("#column_chart_leadsbysource"),
    options
);
chart.render();

// weekly-seminar #weekly-seminar
var piechartColors = getChartColorsArray("#weekly-seminar");
var options = {
    series: [1, 100, 20,20, 30,10],
    labels: ['Firas Monzer', 'Firas Hachache', 'Noura Mikati', 'Areej', 'Michella', 'Czarina Villaflores'],
    colors: piechartColors,
    chart: {
        height: '100%',
        type: 'pie',
        verticalAlign: 'left',
        horizontalAlign: 'left',

        events: {
            legendClick: function(chartContext, seriesIndex, config) {
      
               if(seriesIndex==0){
                window.open("https://www.w3schools.com");
               }else if(seriesIndex==1){
                    window.open("https://trusttc.com");
               }
               else if(seriesIndex==2){
                window.open("https://trustcapitaltc.eu");
               }
             
            }
        }
    },

    xaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        lines: {
            show: false,
            opacity: 0,
        },
                        
    },
    stroke: {
        width: 0,
    },
    legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'left',
        verticalAlign: 'center',
        floating: false,
        fontSize: '14px!important',
        fontFamily: 'gilroymedium',
        offsetX: 0,
        itemMargin: {
            vertical: 4,
        },
    },
    dataLabels: {
        enabled:true,
        formatter: function (val) {
            return Math.trunc(val) + "%"
        },
        enabledOnSeries: undefined,
        textAnchor: 'middle',
        distributed: false,
        offsetX: 0,
        offsetY: 0,
        style: {
            fontSize: '12px !important',
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
   //Responsive
    responsive: [{
        breakpoint: 1550,
        options: {
            chart: {
            
                height: '120%',
            },
            legend: {
                show: true,
                position: 'bottom',
                horizontalAlign: 'center',
                verticalAlign: 'center',
                floating: false,
                fontSize: '14px!important',
                fontFamily: 'gilroymedium',
                offsetY: 0,
                itemMargin: {
                    vertical: 1,
                    horizontal: 4,
                },
            },
        }
    },
    {
        breakpoint: 1400,
        options: {
            chart: {
            
                height: '100%',
            },
            legend: {
                show: true,
                position: 'right',
                horizontalAlign: 'center',
                verticalAlign: 'center',
                floating: false,
                fontSize: '14px!important',
                fontFamily: 'gilroymedium',
                offsetY: 0,
                itemMargin: {
                    vertical: 4,
                    horizontal: 1,
                },
            },
        }
    },
    {
        breakpoint: 1200,
        options: {
            chart: {
            
                height: '130%',
            },
            legend: {
                show: true,
                position: 'bottom',
                horizontalAlign: 'center',
                verticalAlign: 'center',
                floating: false,
                fontSize: '14px!important',
                fontFamily: 'gilroymedium',
                offsetY: 0,
                itemMargin: {
                    vertical:1,
                    horizontal: 4,
                },
            },
        }
    }


    ]

};

var chart = new ApexCharts(document.querySelector("#weekly-seminar"), options);
chart.render();

function switchtab($this,$displaytab,$hiddentab) {
    $($displaytab).addClass('d-block');
 
    $($displaytab).removeClass('d-none');
    $($hiddentab).addClass('d-none');
    $($hiddentab).removeClass('d-block');  
   
    
    
}


//#spline_area


//function renderChart($id){

    //var chart = new ApexCharts(
        //document.querySelector($id),
        //options
    //);
    
    //chart.render();


//}







//   spline_area
var splneAreaColors = getChartColorsArray("#spline_area");
var options = {
    chart: {
        height: '100%',
        type: 'area',
        toolbar: {
            show: false,
        }
    },
    legend:{
        show:false,
    },
    fill: {
        type: "solid",
        opacity: 0,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    series: [{
        name: 'New Tickets ',
        data: [34, 40, 28, 52, 42, 109, 100]
    }, {
        name: 'Meetings ',
        data: [32, 60, 34, 46, 34, 52, 41]
    }],
    colors: splneAreaColors,
    xaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        lines: {
            show: false,
            opacity: 0,
        },
        type: 'datemonth',
        categories: ["2018-09", "2018-09", "2018-09", "2018-09", "2018-09", "2018-09", "2018-09"],                
    },
    grid: {
        borderColor: '#333550',
        strokeDashArray: 7,
       
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    //Responsive    
    responsive: [{
        breakpoint: 1399,
        options: {
            chart: {
            
                height: '100%',
            },
          
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#spline_area"),
    options
);
chart.render();
//switchtab
function switchtab($this, $displaytab, $hiddentab) {
    $($displaytab).addClass('d-block');

    $($displaytab).removeClass('d-none');
    $($hiddentab).addClass('d-none');
    $($hiddentab).removeClass('d-block');
    if ($($this).hasClass('bg-soft-gunmetal')) {
    } else {

        $($this).addClass('bg-soft-gunmetal');
        $($this).siblings().removeClass('bg-soft-gunmetal');
    }


}
$('table').scrollTableBody();













