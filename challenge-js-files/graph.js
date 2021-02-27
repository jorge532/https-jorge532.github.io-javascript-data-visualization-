let table0 = document.getElementById("mw-content-text");
let area0 = table0.insertAdjacentHTML("beforebegin", "<div id=chart0></div>");
let target0 = document.getElementById("chart0");

// ----- get data from API -----

let dataPoints = [];

function fetchData() {
    fetch("https://inside.becode.org/api/v1/data/random.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                dataPoints[i] = {
                    y: parseInt(data[i][0]),
                    x: parseInt(data[i][1])
                };
            }
            d3.select("#svg0").remove();
            drawChart0(dataPoints);
        })
        .catch(error => {
            console.log(error);
        });
}



setInterval(fetchData, 1000);



function drawChart() {
    let barChart0 = document.getElementById("myChart");
    barChart0.insertAdjacentHTML("afterend", "<svg id=svg0></svg>");

    let svgWidth = 1000;
    let svgHeight = 500;

    let margin = 20;
    let width = svgWidth - 2 * margin;
    let height = svgHeight - 2 * margin;

    let svg = d3
        .select("#svg0")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    let y = d3
        .scaleBand()
        .domain(dataPoints.map(d => d.y))
        .range([height, 0])
        .paddingInner(0.1)
        .paddingOuter(0.1);

    let x = d3
        .scaleLinear()
        .domain([-20, 20])
        .range([0, width]);

    let barChart = svg
        .append("g")
        .attr("transform", `translate(${margin}, ${margin})`);

    let groupY = barChart
        .append("g")
        .attr("transform", `translate(${width / 2}, 0)`);

    let groupX = barChart
        .append("g")
        .attr("transform", `translate(0, ${height})`);

    let rects = barChart
        .selectAll("rect")
        .data(dataPoints)
        .enter()
        .append("rect")
        .attr("fill", "#2543e6")
        .attr("y", function(d) {
            return y(d.y);
        })
        .attr("x", function(d) {
            if (d.x < 0) {
                return x(d.x);
            } else {
                return x(0);
            }
        })
        .attr("height", y.bandwidth())
        .attr("width", function(d) {
            let absoluteValue = Math.abs(d.x);
            return x(absoluteValue) - width / 2;
        });



    let axisY = d3.axisLeft(y);
    let axisX = d3.axisBottom(x);

    groupY.call(axisY).style("color", "black");
    groupX.call(axisX).style("color", "black");
}


let countryArray = [];

for (let i = 0; i < 35; i++) {
    let country = {
        name: storeName(i),
        data: storeData(i)
    };

    function storeName(i) {
        let name = document.getElementsByTagName("td")[i * 12].innerHTML;
        return name; //ici
    }

    function storeData(i) {
        let dataArray = [];
        for (let j = 1; j < 12; j++) {
            let value = document.getElementsByTagName("td")[i * 12 + j]
                .innerHTML;
            let usableValue = value.replace(",", ".");
            let treatedValue = parseFloat(usableValue);
            dataArray.push(treatedValue);
        }
        return dataArray;
    }
    countryArray.push(country);
}
console.log(countryArray);



let dateArray = [];

for (let i = 5; i < 16; i++) {
    let date = {
        year: storeYear(i),
        data: storeData(i)
    };

    function storeYear(i) {
        let year = document.getElementsByTagName("th")[i].innerHTML;
        return year;
    }

    function storeData() {
        let dataArray = [];
        for (let j = 0; j < 35; j++) {
            let value = document.getElementsByTagName("td")[i - 4 + j * 12]
                .innerHTML;
            let usableValue = value.replace(",", ".");
            let treatedValue = parseFloat(usableValue);
            dataArray.push(treatedValue);
        }
        return dataArray;
    }
    dateArray.push(date);
}
console.log(dateArray);


let periodArray = [];

for (let i = 2; i < 4; i++) {
    let timePeriod = {
        period: storePeriod(i),
        data: storeData(i)
    };

    function storePeriod(i) {
        let area = document.getElementById("table1");
        let period = area.getElementsByTagName("th")[i].innerHTML;
        return period;
    }

    function storeData() {
        let dataArray = [];
        for (let j = 0; j < 30; j++) {
            let area = document.getElementById("table1");
            let value = area.getElementsByTagName("td")[i - 1 + j * 3]
                .innerHTML;
            dataArray.push(value);
        }
        return dataArray;
    }
    periodArray.push(timePeriod);
}
console.log(periodArray);



let years = [];
for (let i = 5; i < 16; i++) {
    let year = document.getElementsByTagName("th")[i].innerHTML;
    years.push(year);
}

let countries = [];
for (let i = 0; i < 35; i++) {
    let country = document.getElementsByTagName("td")[i * 12].innerHTML;
    countries.push(country);
}

let timePeriods = [];
for (let i = 2; i < 4; i++) {
    let area = document.getElementById("table1");
    let period = area.getElementsByTagName("th")[i].innerHTML;
    timePeriods.push(period);
}


let table1 = document.getElementById("table1");
let area = table1.insertAdjacentHTML("beforebegin", "<div id=chart1></div>");
let target = document.getElementById("chart1");
target.style.paddingBottom = "3%";
for (let i = 0; i < 35; i++) {
    let button = document.createElement("button");
    target.appendChild(button);
    button.innerHTML = countries[i];
}

let buttons = document.querySelectorAll("#chart1>button");
buttons.forEach(element => {
    element.style.width = "12%";
    element.style.margin = "1% 0.5%";
});

let buttonsArray = [...buttons];
buttonsArray.map(button =>
    button.addEventListener("click", e => {
        e.preventDefault();
        d3.select("#svg1").remove();
        let match = button.innerHTML;


        let dataSet = getData(match);

        function getData(input) {
            for (let i = 0; i < countryArray.length; i++) {
                if (countryArray[i].name == input) {
                    let values = countryArray[i].data;
                    return values;
                }
            }
        }

       

        let barChart1 = document.getElementById("myChart");
        barChart1.insertAdjacentHTML("afterend", "<svg id=svg1></svg>");

        let svgWidth = 800;
        let svgHeight = 500;

        let margin = { top: 20, right: 20, bottom: 30, left: 50 };
        let width = svgWidth - margin.left - margin.right;
        let height = svgHeight - margin.top - margin.bottom;

        let svg = d3
            .select("#svg1")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

        let y = d3
            .scaleLinear()
            .domain([0, d3.max(dataSet)])
            .range([svgHeight, 20]);

        let x = d3
            .scaleBand()
            .domain(years)
            .range([0, width])
            .paddingInner(0.1)
            .paddingOuter(0.1);

        let barChart = svg
            .append("g")
            .attr("transform", `translate(${margin.left}, -${margin.top})`);

        let groupY = barChart.append("g");
        let groupX = barChart
            .append("g")
            .attr("transform", `translate(0, ${svgHeight})`);

        let rects = barChart
            .selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("fill", "#2873e6")
            .attr("y", function(d) {
                return y(d);
            })
            .attr("x", function(d, i) {
                return x(years[i]);
            })
            .attr("height", function(d) {
                return svgHeight - y(d);
            })
            .attr("width", x.bandwidth());

     

        let axisY = d3.axisLeft(y);
        let axisX = d3.axisBottom(x);

        groupY.call(axisY).style("color", "black");
        groupX.call(axisX).style("color", "black");
    })
);