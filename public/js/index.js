$(document).ready(function () {
  $("#pageOneAnswers").on("click", function (event) {
    event.preventDefault();

    const userScores = {
      scores: [
        q1Score = parseInt($("input[name=marijuana]:checked").val()),
        q2Score = parseInt($("input[name=guns]:checked").val()),
        q3Score = parseInt($("input[name=death]:checked").val()),
        totalScore = q1Score + q2Score + q3Score,
      ]
    }
    //need to send to database here?

    console.log(userScores);

  })
})


// d3 js //
var width = 750,
  height = 750,
  radius = Math.min(width, height) / 2,
  innerRadius = 0.3 * radius;

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return d.width;
  });

var tip = d3
  .tip()
  .attr("class", "d3-tip")
  .offset([0, 0])
  .html(function (d) {
    return (
      d.data.label + ": <span style='color:red'>" + d.data.score + "</span>"
    );
  });

var arc = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(function (d) {
    return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
  });

var outlineArc = d3.svg
  .arc()
  .innerRadius(innerRadius)
  .outerRadius(radius);

var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

svg.call(tip);

d3.csv(
  "https://gist.githubusercontent.com/bbest/2de0e25d4840c68f2db1/raw/52757de7e4584a6ff8cefbd2f8cea8a0d7cc2f0c/aster_data.csv",
  function (error, data) {
    data.forEach(function (d) {
      d.id = d.id;
      d.order = +d.order;
      d.color = d.color;
      d.weight = +d.weight;
      d.score = +d.score;
      d.width = +d.weight;
      d.label = d.label;
    });

    //sort chart from highest to lowest if desired
    // data.sort((a, b) => d3.descending(a.score, b.score));
    // for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

    var path = svg
      .selectAll(".solidArc")
      .data(pie(data))
      .enter()
      .append("path")
      //make it pick a random color??
      .attr("fill", function (d) {
        return d.data.color;
      })
      .attr("class", "solidArc")
      .attr("stroke", "gray")
      .attr("d", arc)
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide);

    var outerPath = svg
      .selectAll(".outlineArc")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "gray")
      .attr("class", "outlineArc")
      .attr("d", outlineArc);

    // calculate the weighted mean score // won't need this part but keep for now in case we do some kind of average
    var score =
      data.reduce(function (a, b) {
        //console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
        return a + b.score * b.weight;
      }, 0) /
      data.reduce(function (a, b) {
        return a + b.weight;
      }, 0);

    svg
      .append("svg:text")
      .attr("class", "aster-score ")
      .attr("dy", ".35em")
      .attr("text-anchor", "middle") // text-align: right
      .text(2020);
  }
);