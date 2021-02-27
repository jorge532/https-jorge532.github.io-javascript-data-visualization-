
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var ctx_live = document.getElementById("myChart3");
var myChart3 = new Chart(ctx_live, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      data: [],
      borderWidth: 1,
      borderColor:'#00c0ef',
      label: 'datapoints',
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Dynamically Updated.",
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  }
});


var postId = 1;


var getData = function() {
  $.ajax({
    url: 'https://canvasjs.com/services/data/datapoints.php',
    success: function(data) {
    
  
      myChart3.data.labels.push("Post " + postId++);
      myChart3.data.datasets[0].data.push(getRandomIntInclusive(1,9));
      
      
      myChart3.update();
    }
  });
};


setInterval(getData, 1000);