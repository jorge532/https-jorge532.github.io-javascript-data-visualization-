$(document).ready(function () {
    showGraph();
});


function showGraph()
{
    {
        $.post("https://canvasjs.com/services/data/datapoints.php",
        function (data)
        {
            console.log(data);
             var name = [];
            var marks = [];

            for (var i in data) {
                name.push(data[i].a);
                marks.push(data[i].b);
            }

            var chartdata = {
                labels: name,
                datasets: [
                    {
                        label: 'EU',
                        backgroundColor: '#49e2ff',
                        borderColor: '#46d5f1',
                        hoverBackgroundColor: '#CCCCCC',
                        hoverBorderColor: '#666666',
                        data: marks
                    }
                ]
            };

            var graphTarget = $("#graphCanvas");

            var barGraph = new Chart(graphTarget, {
                type: 'bar',
                data: chartdata
            });
        });
    }