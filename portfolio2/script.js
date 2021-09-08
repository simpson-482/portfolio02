
var highCharts = document.getElementsById('myDiv');

var data = [
    {
        value: 30,
        color: "cornflowerblue",
        highlight: "lightskyblue",
        label: "Obese"
    },
    {
        value: 90,
        color: "chocolate",
        highlight: "papayawhip",
        label: "Over-weight"
    },
    {
        value: 240,
        color: "darkorange",
        highlight: "orange",
        label: "Normal weight"
    },
];
// draw

var piechart = new Chart(ctx).Pie(data);

highCharts.appendChild(piechart);




// Attempt 2
// Highcharts.chart('container', {
//     chart: {
//       plotBackgroundColor: null,
//       plotBorderWidth: 0,
//       plotShadow: false
//     },
//     title: {
//       text: 'Browser<br>shares<br>2017',
//       align: 'center',
//       verticalAlign: 'middle',
//       y: 60
//     },
//     tooltip: {
//       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//       point: {
//         valueSuffix: '%'
//       }
//     },
//     plotOptions: {
//       pie: {
//         dataLabels: {
//           enabled: true,
//           distance: -50,
//           style: {
//             fontWeight: 'bold',
//             color: 'white'
//           }
//         },
//         startAngle: -90,
//         endAngle: 90,
//         center: ['50%', '75%'],
//         size: '110%'
//       }
//     },
//     series: [{
//       type: 'pie',
//       name: 'Browser share',
//       innerSize: '50%',
//       data: [
//         ['Chrome', 58.9],
//         ['Firefox', 13.29],
//         ['Internet Explorer', 13],
//         ['Edge', 3.78],
//         ['Safari', 3.42],
//         {
//           name: 'Other',
//           y: 7.61,
//           dataLabels: {
//             enabled: false
//           }
//         }
//       ]
//     }]
//   });




// Attempt 1
// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });