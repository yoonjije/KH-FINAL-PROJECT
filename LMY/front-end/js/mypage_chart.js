var ctx4 =document.getElementById('myChart2');
var ctx3 = document.getElementById('myChart');

//막대그래프
var myChart = new Chart(ctx3, { 
    type: 'bar', 
    data: { labels: ['', '1', '', '2', '', '3','','4','','5'], 
            datasets: [{ label: '별점분포', data: [22, 19, 45, 50, 85, 44, 46, 12, 88, 63], 
            backgroundColor: [ 'rgba(255, 99, 132, 0.2)', 
                                'rgba(54, 162, 235, 0.2)', 
                                'rgba(255, 206, 86, 0.2)', 
                                'rgba(75, 192, 192, 0.2)', 
                                'rgba(153, 102, 255, 0.2)', 
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                             ], 
            borderColor: [ 'rgba(255, 99, 132, 1)', 
                            'rgba(54, 162, 235, 1)', 
                            'rgba(255, 206, 86, 1)', 
                            'rgba(75, 192, 192, 1)', 
                            'rgba(153, 102, 255, 1)', 
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)' ], 
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
            backgroundColor: [ 'rgba(255, 99, 132, 0.2)', 
                                'rgba(54, 162, 235, 0.2)', 
                                'rgba(255, 206, 86, 0.2)', 
                                'rgba(75, 192, 192, 0.2)', 
                                'rgba(153, 102, 255, 0.2)' 
                                
                             ], 
            borderColor: [ 
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)' ], 
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