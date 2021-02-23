var ctx = document.getElementById('myChart');

var Crime= [1073,121,305,441,5997,41,194,2269,72,2819,8,50,75,37,472,16,1139,548,1119,403,90,90,425,1402,12,1,274,750,6,30,96,1904];
var Countries = ['Belgium','Bulgaria','Czech Republic','Denmark','Germany','Estonia','Ireland','Greece','Spain','France','Croatia','Italy','Cyprus','Latvia','Lithuania','Luxembourg','Hungary','Malta','The Netherlands','Austria','Poland','Portugal','Romania','Slovenia','Slovakia','Finland','Sweden','Iceland','Liechtenstein','Norway','Switzerland','Montenegro','Macedonia','Serbia','Turkey'];

var myChart = new Chart(ctx, {
 type: 'bar',
 data: {
    labels: Countries,
    datasets: [{
        label: 'Crime Rate 2012',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: Crime
        

 

    }]
 },
 maintainAspectRatio: false,
 responsive: true
})

var convertedIntoArray = [];
$("table2table1 tr").each(function() {
   var rowDataArray = [];
   var actualData = $(this).find('td');
   if (actualData.length > 0) {
      actualData.each(function() {
         rowDataArray.push($(this).text());
      });
      convertedIntoArray.push(rowDataArray);
   }
});
console.log(convertedIntoArray);