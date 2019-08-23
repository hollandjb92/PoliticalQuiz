$(document).ready(function () {
  $("#pageOne").on("click", (event) => {
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
  }).then(_ => {

    //redirect still not working properly but im sleep
    alert("hi");
    $(location).attr('href', 'http://stackoverflow.com')
  })
})