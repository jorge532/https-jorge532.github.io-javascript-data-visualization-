
window.onload = function() { 
 
    var dataPoints = [];
     
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Homicide"
        },
        axisY: {
            title: ""
        },
        data: [{
            type: "column",
            toolTipContent: "persons",
            dataPoints: dataPoints
        }]
    });
     
    $.get("http://127.0.0.1:5500/crimes.csv", getDataPointsFromCSV);
     
    //CSV Format
    //Year,Volume
    function getDataPointsFromCSV(csv) {
        var points;
        var csvLines = csv.split(/[\r?\n|\r|\n]+/);
        for (var i = 1; i < csvLines.length; i++) {
            if (csvLines[i].length > 0) {
                points = csvLines[i].split(",");
                dataPoints.push({
                    label: points[0],
                    y: parseFloat(points[0])
                   
                });
            }
        }
        chart.render();
    }
     
    }

window.onload = function() { 
 
    var dataPoints = [];
     
    var chart = new CanvasJS.Chart("chartContainer1", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: "Homicide"
        },
        axisY: {
            title: ""
        },
        data: [{
            type: "column",
            toolTipContent: "persons",
            dataPoints: dataPoints
        }]
    });
     
    $.get("http://127.0.0.1:5500/prison.csv", getDataPointsFromCSV);
     
    //CSV Format
    //Year,Volume
    function getDataPointsFromCSV(csv) {
        var points;
        var csvLines = csv.split(/[\r?\n|\r|\n]+/);
        for (var i = 1; i < csvLines.length; i++) {
            if (csvLines[i].length > 0) {
                points = csvLines[i].split(",");
                dataPoints.push({
                    label: points[0],
                    y: parseFloat(points[1,2])
                   
                });
            }
        }
        chart.render();
    }
     
    }