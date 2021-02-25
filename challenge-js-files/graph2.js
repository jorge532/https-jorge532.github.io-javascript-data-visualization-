var dataPoints1 = [], dataPoints2 = [];
var chart1 = new CanvasJS.Chart("chartContainer1", {
  animationEnabled: true,
  zoomEnabled: true,
  theme: "light1", // "light1", "light2", "dark1", "dark2"
  exportEnabled: true,
  title: {
    text: "Homicides in Europe"
  },
  subtitles: [{
    text: ""
  }],
  axisY: {
    title: "Homicides"
  },
  data: [
    {
      type: "column",
      showInLegend: true,
      name: "2007-2009",
      dataPoints: dataPoints1
    },
    {
      type: "column",
      showInLegend: true,
      name: "2010-2012",
      dataPoints: dataPoints2

    }]
});

$.get("http://127.0.0.1:5500/homicide.csv", getDataPointsFromCSV);

function getDataPointsFromCSV(csv) {

  var csvLines = points = [];
  csvLines = csv.split(/[\r?\n|\r|\n]+/);

  for (var i = 0; i < csvLines.length - 2; i++) {

    if (csvLines[i].length > 0) {			
      points = csvLines[i].split(",");	
      dataPoints1.push({
        label:points[0],
        y: parseFloat(points[1])});

      dataPoints2.push({
        label:points[0],
        y: parseFloat(points[2])
      });
    }
  }
  chart1.render();
}


