var ctx4 =document.getElementById('myChart2');
var ctx3 = document.getElementById('myChart');

//막대그래프
var myChart = new Chart(ctx3, { 
    type: 'bar', 
    data: { labels: ['', '1', '', '2', '', '3','','4','','5'], 
            datasets: [{ label: '별점분포', data: [22, 19, 45, 50, 85, 44, 46, 12, 88, 63], 
            backgroundColor: [ 'rgba(255, 204, 000)', 
                              'rgba(255, 204, 000)', 
                              'rgba(255, 204, 000)', 
                              'rgba(255, 204, 000)', 
                              'rgba(255, 204, 000)', 
                              'rgba(255, 204, 000)',
                              'rgba(255, 204, 000)',
                              'rgba(255, 204, 000)',
                              'rgba(255, 204, 000)',
                              'rgba(255, 204, 000)'
                             ], 
            borderColor: [ 'rgba(255, 204, 000)', 
            'rgba(255, 204, 000)', 
            'rgba(255, 204, 000)', 
            'rgba(255, 204, 000)', 
            'rgba(255, 204, 000)', 
            'rgba(255, 204, 000)',
            'rgba(255, 204, 000)',
            'rgba(255, 204, 000)',
            'rgba(255, 204, 000)',
            'rgba(255, 204, 000)'], 
            borderWidth: 1 
            }] 
          }, 
      options: { 
        maintainAspectRatio : false,
        legend : {display : false},
        scales: { 
          xAxes: [{
            gridLines: {
            display:false
            }
          }],
          yAxes: [{ 
            ticks: { 
              beginAtZero: true,
              stepSize : 30 },
            gridLines: {
              display:false
            }
               }] 
              } 
            } 
          }
        ); 

    //도넛차트 
    var myChart2 = new Chart(ctx4, { 
    type: 'doughnut', 
    data: { labels: ['로맨스', '액션', '호러', '다큐', '애니매이션'], 
            datasets: [{ label: '별점분포', data: [22, 19, 45, 50, 85], 
            backgroundColor: [ 
            'rgba(051, 204, 102)', 
            'rgba(000, 102, 051)', 
            'rgba(000, 153, 102)', 
            'rgba(051, 153, 102)', 
            'rgba(051, 204, 153)' 
                                
                             ], 
            borderColor: [ 
              'rgba(051, 204, 102)',
              'rgba(000, 102, 051)',
              'rgba(000, 153, 102)',
              'rgba(051, 153, 102)',
              'rgba(051, 204, 153)'], 
            borderWidth: 1 
            }] 
          }, 
      options: { 
        maintainAspectRatio : false,
        legend : {display : false},
        scales: { 
          xAxes: [{
            gridLines: {
            display:false
            }
           
          }],
          yAxes: [{ 
            ticks: { 
              beginAtZero: true,
              stepSize : 30 },
            gridLines: {
              display:false
            }
            
               }] 
              } 
            } 
          }
        ); 