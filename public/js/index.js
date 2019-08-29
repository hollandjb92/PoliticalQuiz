//put this into functions and make it like 1/10 of the size...eventually


$(document).ready(function () {
  var allQuestions = [{
      question: "Do you support decriminalizing marijuana on a federal level?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "marijuana",
      info: "Some states have decriminalized marijuana for medical and/or recreational use. Some candidates fully support decriminalizing marijuana on a federal level because they believe these drug laws do more harm than good. Others want to leave it up to the states to decide. The federal government usually doesn’t enforce marijuana prohibition laws in states that have legalized marijuana. It’s more of an informal rule but it could easily be reversed by whoever is in charge."
    },

    {
      question: "Should gun purchasers be vetted through background checks?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "guns",
      info: "Nearly all Democrats support universal background checks and closing any loopholes in the system. Currently private dealers at gun shows do not have to run background checks on potential buyers (this is commonly known as the gun show loophole). Also, if the FBI doesn’t complete a buyers background check within three days, a licensed gun seller can still sell the gun."
    },

    {
      question: "Do you support abolishing the death penalty?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "death",
      info: "Many Democrats are speaking out against the death penalty. Several states (and Washington D.C.) have outlawed the death penalty. Those who oppose it say it’s inhumane and that there have been many people who were wrongly executed.. Others would keep it but only for extreme cases. Donald Trump supports the death penalty and has even talked about using it more often."
    },

    {
      question: "Do you support rolling back the 2017 tax reform legislation?",
      choices: ["For", "Against", "Neutral"],
      name: "rollback",
      value: [10, 1, 5],
      info: "The Tax Cuts and Jobs Act from 2017 cut corporate taxes. It is widely unpopular among Democrats, who say it only benefits corporations and the wealthy."
    },

    {
      question: "Do you support raising the federal minimum wage to $15 per hour?",
      choices: ["For", "Against", "Neutral"],
      name: "minimumWage",
      value: [10, 1, 5],
      info: "The federal minimum wage is currently set at $7.25 (it’s been this way since 2009). States may have different minimum wage laws. Most Democrats and some Republicans think change is long overdue (but they don’t always agree on the exact number). Many people in Donald Trump’s cabinet oppose raising the minimum wage.  "
    },

    {
      question: "Do you support raising taxes on the wealthy?",
      choices: ["For", "Against", "Neutral"],
      name: "wealthy",
      value: [10, 1, 5],
      info: "Raising taxes on the wealthy is becoming an increasingly popular position. Others want to give more tax credits to middle and low income Americans (or a combination of both). "
    },

    {
      question: "Should the federal government prevent states from passing laws that restrict abortion?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "abortion",
      info: "All the 2020 Democrats are in favor of abortion rights. Some want to federal government to step in to stop states from abortion bans and allow federal funds to pay for them. Others want some limits on abortion, especially if they occur later in a woman’s pregnancy. Donald Trump has shifted his position from pro-choice to pro-life over the years."
    },

    {
      question: "Do you support Medicare for all?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "medicare",
      info: "All 2020 Democrats support some kind of universal health care. Some candidates would like to transition to a Medicare for all system that eliminates private health insurance. Others support having a government run healthcare program that also allows people to keep existing private healthcare plans if they choose to. Others say Medicare for all is too expensive and unrealistic but would expand the ACA (Affordable Care Act or Obamacare) to cover more people."
    },

    {
      question: "Should the government intervene to help contain rising drug prices?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "drugs",
      info: "Americans often pay more for prescription drugs than other developed nations. In other countries, governments negotiate the costs of drugs to keep the costs low. Different candidates have different ideas for controlling rising drug prices. Some want Medicare to negotiate drug prices, others want to allow importation of drugs, encouraging production of cheaper generic drugs and imposing taxes on drug companies that raise the price of drugs."
    },

    {
      question: "Do you support tutition free college?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "tuition",
      info: "Tuition free college is becoming more and more popular as student debt rises. Some candidates support free college, while others support free college for the first two years or free community college or vocational training or making education free for low-income families. Others support increasing financial aid for students so students don’t have to go into debt."
    },

    {
      question: "Should the government expand or fix existing student debt relief programs?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "studentDebt",
      info: "Some candidates have bold plans to cancel all or some student debts. Others want to fix current debt relief programs such as cancelling student debt for people who work in public service or forgiving student debt for teachers. Most 2020 Democratic candidates want to lower monthly payments for borrowers and reduce interest rates on federal loans."
    },

    {
      question: "Do you support raising teacher pay?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "teachers",
      info: "Since 2018, teachers in various states have begun striking to protest low pay and poor working conditions. Teachers often make less than other professionals with similar education and experience."
    },

    {
      question: "Do you support the 'Green New Deal'?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "newDeal",
      info: "Earlier this year freshman Democrat Alexandria Ocasio-Cortez and Senator Ed Markey introduced an ambitious plan to fight climate change. This nonbinding resolution calls for dramatically reducing carbon emissions, investing in clean energy and transportation and creating jobs in the clean energy field. Many Democrats support it but others think it is too ambitious or disagree with some of the specifics and have their own plans to fight climate change. Donald Trump has stated that he doesn’t believe in climate change."
    },

    {
      question: "Should the U.S. reenter the Paris Climate Agreement?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "paris",
      info: "The Paris Agreement is an international accord adopted by most countries in 2015. Each country commits to reducing greenhouse gas emissions to prevent global temperatures from rising above 2 degrees Celsius. Each country sets their own goals for reducing emissions. Donald Trump announced in 2017 that he plans to withdraw. This sparked a lot of backlash with many cities, states and businesses saying they will continue to keep working toward the original goals."
    },

    {
      question: "Should we expand nuclear power?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "nuclear",
      info: "Nuclear power creates a lot of electricity without the greenhouse gas emissions of coal or natural gas. But the waste created from nuclear power plants can be dangerous. This has become an even bigger concern after the infamous 2011 Fukushima meltdown in Japan."
    },

    {
      question: "Should illegal border crossing be criminalized?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "illegal",
      info: "It’s currently a crime to cross the border with an inspection by an immigration officer. Some candidates have proposed making it a civil offense rather than a crime. Others want to keep the statue in place but still reform immigration laws."
    },

    {
      question: "Do you support citizenship for DACA (Deferred Action for Childhood Arrivals?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "daca",
      info: "President Obama created DACA in 2012. This program allows undocumented immigrants brought to the country as children (known as “Dreamers”) to live and work here without the threat of deportation. President Trump has been trying since 2017 to phase out the program but the decision has been temporarily blocked by federal courts. Members of Congress have (unsuccessfully) tried for years to provide a path to citizenship for Dreamers."
    },

    {
      question: "Should the government provide additional funding for border wall construction?",
      choices: ["For", "Against", "Neutral"],
      value: [10, 1, 5],
      name: "wall",
      info: "“The Wall” was one of Donald Trump’s signature campaign promises. Most Democrats oppose spending billions to build the wall. Some Democrats want to tear down portions of the wall while others are considering supporting border wall funding as part of immigration reform bills."
    },

    {
      question: "What is your preferred age range for President?",
      choices: ["35 - 44 ", "45- 54", "55-64", "65-74", "75 or older"],
      value: [40, 50, 60, 70, 80],
      name: "age",
      info: "Age is a concern for some of the candidates. Donald Trump is currently the oldest U.S. President at 73. If elected, Bernie Sanders would become the oldest president at 79."
    }
  ];

  $(document)
    .change("radio", function () {
      let count = 0;
      var names = {};
      $(":radio").each(function () {
        names[$(this).attr("name")] = true;
      });
      $.each(names, function () {
        count++;
      });
      if ($(":radio:checked").length === count) {
        $(".submitQuestions").prop("disabled", false);
      } else {
        $(".submitQuestions").prop("disabled", true);
      }
    })
    .change();

  $("#navStart").click(function () {
    $("html, body").animate({
        scrollTop: $("#questionsDiv").offset().top
      },
      500
    );
  });

  var answers = {
    email: "",
    totalScore: 0
  };

  $(document).on("click", "#startQuiz", function (event) {
    event.preventDefault();
    let email = $("#email").val();
    console.log("log statement" + email);
    answers.email = email;
    $.post(
      "/api/posts", {
        email: email
      },
      function (data, status) {
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
      }
    );

    $("#questionsDiv").empty();
    $("#questionsDiv").append($("<h1>").text("Criminal Justice"));
    $("#questionsDiv").append($("<form>"));

    for (i = 0; i < 3; i++) {
      var newDiv = $("<div>");
      newDiv.append($("<h3>").text("Question " + parseInt(i + 1)));
      newDiv.append($("<h5>").text(allQuestions[i].question));
      for (j = 0; j < 3; j++) {
        newDiv.append(
          $(
            "<label><input type='radio' value='" +
            allQuestions[i].value[j] +
            "'name='" +
            allQuestions[i].name +
            "'>" +
            allQuestions[i].choices[j] +
            "</label>"
          )
        );
      }

      $("#questionsDiv")
        .children("form")
        .append(newDiv);
    }

    $("#questionsDiv").append(
      $(
        "<button type='submit' class='btn btn-primary submitQuestions mr-3' disabled='disabled'  id ='criminalJustice'> Next Questions </button>"
      )
    );
    $("#questionsDiv").append(
      $(
        // "<p>" +
        "<button class='btn btn-info shadow-none' type='button' data-toggle='collapse' data-target='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>" +
        "More Information" +
        "</button>" +
        // "</p>" +
        "<div class='collapse' id='collapseExample1'>" +
        "<div class='card card-body infoDiv'>" +
        "<p> <strong> Question " +
        parseInt(i - 2) +
        ": </strong>" +
        allQuestions[i - 3].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i - 1) +
        ": </strong>" +
        allQuestions[i - 2].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i) +
        ": </strong>" +
        allQuestions[i - 1].info +
        // "</p>" +
        "</div>" +
        "</div>"
      )
    );
  });

  $(document).on("click", "#criminalJustice", function () {
    event.preventDefault();

    var q1Score = parseInt($("input[name=marijuana]:checked").val());
    var q2Score = parseInt($("input[name=guns]:checked").val());
    var q3Score = parseInt($("input[name=death]:checked").val());
    var totalScore = q1Score + q2Score + q3Score;

    var score = {
      userScore: totalScore
    };

    answers.totalScore = totalScore;
    console.log(totalScore);

    $("#questionsDiv").empty();
    $("#questionsDiv").append($("<h1>").text("Economics"));
    $("#questionsDiv").append($("<form>"));

    for (i = 3; i < 6; i++) {
      var newDiv = $("<div>");
      newDiv.append($("<h3>").text("Question " + parseInt(i + 1)));
      newDiv.append($("<h5>").text(allQuestions[i].question));
      for (j = 0; j < 3; j++) {
        // newDiv.append($("<label>").append($("<input>").attr({
        //   type: "radio",
        //   value: allQuestions[i].value[j],
        //   name: allQuestions[i].name
        // })))
        newDiv.append(
          $(
            "<label><input type='radio' value='" +
            allQuestions[i].value[j] +
            "'name='" +
            allQuestions[i].name +
            "'>" +
            allQuestions[i].choices[j] +
            "</label>"
          )
        );
      }

      $("#questionsDiv")
        .children("form")
        .append(newDiv);
    }

    $("#questionsDiv").append(
      $(
        "<button type='submit' class='btn btn-primary submitQuestions mr-3' disabled='disabled' id='taxWage' >Next Questions</button>"
      )
    );

    $("#questionsDiv").append(
      $(
        // "<p>" +
        "<button class='btn btn-info shadow-none' type='button' data-toggle='collapse' data-target='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>" +
        "More Information" +
        "</button>" +
        // "</p>" +
        "<div class='collapse' id='collapseExample1'>" +
        "<div class='card card-body infoDiv'>" +
        "<p> <strong> Question " +
        parseInt(i - 2) +
        ": </strong>" +
        allQuestions[i - 3].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i - 1) +
        ": </strong>" +
        allQuestions[i - 2].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i) +
        ": </strong>" +
        allQuestions[i - 1].info +
        // "</p>" +
        "</div>" +
        "</div>"
      )
    );
  });

  // need to "create quiz page 3 inside here"
  $(document).on("click", "#taxWage", function (event) {
    event.preventDefault();

    const userScores = {
      scores: [
        (q4Score = parseInt($("input[name=rollback]:checked").val())),
        (q5Score = parseInt($("input[name=minimumWage]:checked").val())),
        (q6Score = parseInt($("input[name=wealthy]:checked").val())),
        (totalScore = q4Score + q5Score + q6Score)
      ]
    };
    //need to send to database here?
    console.log(answers.totalScore);
    console.log(userScores);
    console.log(userScores.scores[3]);

    answers.totalScore += userScores.scores[3];
    console.log(answers.totalScore);

    $("#questionsDiv").empty();
    $("#questionsDiv").append($("<h1>").text("Healthcare"));
    $("#questionsDiv").append($("<form>"));

    for (i = 6; i < 9; i++) {
      var newDiv = $("<div>");
      newDiv.append($("<h3>").text("Question " + parseInt(i + 1)));
      newDiv.append($("<h5>").text(allQuestions[i].question));
      for (j = 0; j < 3; j++) {
        newDiv.append(
          $(
            "<label><input type='radio' value='" +
            allQuestions[i].value[j] +
            "'name='" +
            allQuestions[i].name +
            "'>" +
            allQuestions[i].choices[j] +
            "</label>"
          )
        );
      }

      $("#questionsDiv")
        .children("form")
        .append(newDiv);
    }

    $("#questionsDiv").append(
      $(
        "<button type='submit' class='btn btn-primary submitQuestions mr-3' disabled='disabled' id='healthcare'>Next Questions</button>"
      )
    );

    $("#questionsDiv").append(
      $(
        // "<p>" +
        "<button class='btn btn-info shadow-none' type='button' data-toggle='collapse' data-target='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>" +
        "More Information" +
        "</button>" +
        // "</p>" +
        "<div class='collapse' id='collapseExample1'>" +
        "<div class='card card-body infoDiv'>" +
        "<p> <strong> Question " +
        parseInt(i - 2) +
        ": </strong>" +
        allQuestions[i - 3].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i - 1) +
        ": </strong>" +
        allQuestions[i - 2].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i) +
        ": </strong>" +
        allQuestions[i - 1].info +
        // "</p>" +
        "</div>" +
        "</div>"
      )
    );
  });

  $(document).on("click", "#healthcare", function (event) {
    event.preventDefault();

    const userScores = {
      scores: [
        (q7Score = parseInt($("input[name=abortion]:checked").val())),
        (q8Score = parseInt($("input[name=medicare]:checked").val())),
        (q9Score = parseInt($("input[name=drugs]:checked").val())),
        (totalScore = q7Score + q8Score + q9Score)
      ]
    };
    //need to send to database here?
    console.log(answers.totalScore);
    answers.totalScore += userScores.scores[3];

    $("#questionsDiv").empty();
    $("#questionsDiv").append($("<h1>").text("Education"));
    $("#questionsDiv").append($("<form>"));

    for (i = 9; i < 12; i++) {
      var newDiv = $("<div>");
      newDiv.append($("<h3>").text("Question " + parseInt(i + 1)));
      newDiv.append($("<h5>").text(allQuestions[i].question));
      for (j = 0; j < 3; j++) {
        newDiv.append(
          $(
            "<label><input type='radio' value='" +
            allQuestions[i].value[j] +
            "'name='" +
            allQuestions[i].name +
            "'>" +
            allQuestions[i].choices[j] +
            "</label>"
          )
        );
      }

      $("#questionsDiv")
        .children("form")
        .append(newDiv);
    }

    $("#questionsDiv").append(
      $(
        "<button type='submit' class='btn btn-primary submitQuestions mr-3' disabled='disabled' id='education'>Next Questions</button>"
      )
    );

    $("#questionsDiv").append(
      $(
        // "<p>" +
        "<button class='btn btn-info shadow-none' type='button' data-toggle='collapse' data-target='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>" +
        "More Information" +
        "</button>" +
        // "</p>" +
        "<div class='collapse' id='collapseExample1'>" +
        "<div class='card card-body infoDiv'>" +
        "<p> <strong> Question " +
        parseInt(i - 2) +
        ": </strong>" +
        allQuestions[i - 3].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i - 1) +
        ": </strong>" +
        allQuestions[i - 2].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i) +
        ": </strong>" +
        allQuestions[i - 1].info +
        // "</p>" +
        "</div>" +
        "</div>"
      )
    );
  });

  $(document).on("click", "#education", function (event) {
    event.preventDefault();

    const userScores = {
      scores: [
        (q10Score = parseInt($("input[name=tuition]:checked").val())),
        (q11Score = parseInt($("input[name=studentDebt]:checked").val())),
        (q12Score = parseInt($("input[name=teachers]:checked").val())),
        (totalScore = q10Score + q11Score + q12Score)
      ]
    };
    //need to send to database here?
    console.log(answers.totalScore);
    answers.totalScore += userScores.scores[3];

    $("#questionsDiv").empty();
    $("#questionsDiv").append($("<h1>").text("Environment/Climate "));
    $("#questionsDiv").append($("<form>"));

    for (i = 12; i < 15; i++) {
      var newDiv = $("<div>");
      newDiv.append($("<h3>").text("Question " + parseInt(i + 1)));
      newDiv.append($("<h5>").text(allQuestions[i].question));
      for (j = 0; j < 3; j++) {
        newDiv.append(
          $(
            "<label><input type='radio' value='" +
            allQuestions[i].value[j] +
            "'name='" +
            allQuestions[i].name +
            "'>" +
            allQuestions[i].choices[j] +
            "</label>"
          )
        );
      }

      $("#questionsDiv")
        .children("form")
        .append(newDiv);
    }

    $("#questionsDiv").append(
      $(
        "<button type='submit' class='btn btn-primary submitQuestions mr-3' disabled='disabled' id='climate'>Next Questions</button>"
      )
    );

    $("#questionsDiv").append(
      $(
        // "<p>" +
        "<button class='btn btn-info shadow-none' type='button' data-toggle='collapse' data-target='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>" +
        "More Information" +
        "</button>" +
        // "</p>" +
        "<div class='collapse' id='collapseExample1'>" +
        "<div class='card card-body infoDiv'>" +
        "<p> <strong> Question " +
        parseInt(i - 2) +
        ": </strong>" +
        allQuestions[i - 3].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i - 1) +
        ": </strong>" +
        allQuestions[i - 2].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i) +
        ": </strong>" +
        allQuestions[i - 1].info +
        // "</p>" +
        "</div>" +
        "</div>"
      )
    );
  });

  $(document).on("click", "#climate", function (event) {
    event.preventDefault();

    const userScores = {
      scores: [
        (q13Score = parseInt($("input[name=newDeal]:checked").val())),
        (q14Score = parseInt($("input[name=paris]:checked").val())),
        (q15Score = parseInt($("input[name=nuclear]:checked").val())),
        (totalScore = q13Score + q14Score + q15Score)
      ]
    };
    //need to send to database here?
    console.log(answers.totalScore);
    answers.totalScore += userScores.scores[3];

    $("#questionsDiv").empty();
    $("#questionsDiv").append($("<h1>").text("Immigration"));
    $("#questionsDiv").append($("<form>"));

    for (i = 15; i < 18; i++) {
      var newDiv = $("<div>");
      newDiv.append($("<h3>").text("Question " + parseInt(i + 1)));
      newDiv.append($("<h5>").text(allQuestions[i].question));
      for (j = 0; j < 3; j++) {
        newDiv.append(
          $(
            "<label><input type='radio' value='" +
            allQuestions[i].value[j] +
            "'name='" +
            allQuestions[i].name +
            "'>" +
            allQuestions[i].choices[j] +
            "</label>"
          )
        );
      }

      $("#questionsDiv")
        .children("form")
        .append(newDiv);
    }

    $("#questionsDiv").append(
      $(
        "<button type='submit' class='btn btn-primary submitQuestions mr-3' disabled='disabled' id='immigration'>Next Questions</button>"
      )
    );

    $("#questionsDiv").append(
      $(
        // "<p>" +
        "<button class='btn btn-info shadow-none' type='button' data-toggle='collapse' data-target='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>" +
        "More Information" +
        "</button>" +
        // "</p>" +
        "<div class='collapse' id='collapseExample1'>" +
        "<div class='card card-body infoDiv'>" +
        "<p> <strong> Question " +
        parseInt(i - 2) +
        ": </strong>" +
        allQuestions[i - 3].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i - 1) +
        ": </strong>" +
        allQuestions[i - 2].info +
        "</p>" +
        "<p> <strong> Question " +
        parseInt(i) +
        ": </strong>" +
        allQuestions[i - 1].info +
        // "</p>" +
        "</div>" +
        "</div>"
      )
    );
  });

  $(document).on("click", "#immigration", function (event) {
    event.preventDefault();

    const userScores = {
      scores: [
        (q16Score = parseInt($("input[name=illegal]:checked").val())),
        (q17Score = parseInt($("input[name=daca]:checked").val())),
        (q18Score = parseInt($("input[name=wall]:checked").val())),
        (totalScore = q16Score + q17Score + q18Score)
      ]
    };
    //need to send to database here?
    console.log(answers.totalScore);
    answers.totalScore += userScores.scores[3];

    $("#questionsDiv").empty();
    $("#questionsDiv").append($("<h1>").text("Age"));
    $("#questionsDiv").append($("<form>"));

    for (i = 18; i < 19; i++) {
      var newDiv = $("<div>");
      newDiv.append($("<h3>").text("Question " + parseInt(i + 1)));
      newDiv.append($("<h5>").text(allQuestions[i].question));
      for (j = 0; j < 5; j++) {
        newDiv.append(
          $(
            "<label><input type='radio' value='" +
            allQuestions[i].value[j] +
            "'name='" +
            allQuestions[i].name +
            "'>" +
            allQuestions[i].choices[j] +
            "</label>"
          )
        );
      }

      $("#questionsDiv")
        .children("form")
        .append(newDiv);
    }

    $("#questionsDiv").append(
      $(
        "<button type='submit' class='btn btn-primary submitQuestions' disabled='disabled' id='age'>See Results</button>"
      )
    );
  });

  $(document).on("click", "#age", function (event) {
    event.preventDefault();

    const userScores = {
      scores: [(totalScore = parseInt($("input[name=age]:checked").val()))]
    };
    //need to send to database here?
    console.log(answers.totalScore);
    answers.totalScore += userScores.scores[0];
    $.ajax({
      url: "/api/posts",
      type: "PUT",
      data: answers,
      success: function (data, status) {
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
      }
    });

    $.get("/api/candidates", {}, function (data, status) {
      console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
      remainder = 10000;
      var iterator = 0;
      for (i = 0; i < 14; i++) {
        console.log("this is data i", data[i]);
        console.log(answers.totalScore);
        remainder2 = Math.abs(answers.totalScore - data[i].totalScore);
        if (remainder2 < remainder) {
          remainder = remainder2;
          iterator = i;
        }
      }
      console.log(
        data[iterator].canname,
        data[iterator].totalScore,
        data[iterator].party,
        data[iterator].candidateImage
      );
      $("#questionsDiv").empty();
      $("#questionsDiv").append(
        "<img class='mt-5' src='" +
        data[iterator].candidateImage +
        "' height='300px' width='300px'>"
      );

      $("#questionsDiv").append(
        $("<h1 class='mt-5'>").html(
          data[iterator].canname +
          " - <span id='resultParty'>" +
          data[iterator].party +
          "</span>"
        )
      );

      $("#results").empty();

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
            d.data.label +
            ": <span style='color:red'>" +
            d.data.score +
            "%</span>"
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
        .select("#results")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "animated fadeInRight")
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      svg.call(tip);

      d3.json("/api/candidates", function (error, data) {
        data.forEach(function (d) {
          d.id = d.id;
          d.order = +d.id;
          d.color = d.color;
          d.weight = +0.5;
          d.score = +Math.round(
            100 -
            (Math.abs(d.totalScore - answers.totalScore) /
              ((d.totalScore + answers.totalScore) / 2)) *
            100
          );
          d.width = +0.5;
          d.label = d.canname;
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
            return (
              "#" +
              Math.floor(Math.random() * 16777215)
              .toString(16)
              .padStart(6, "0")
            );
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
      });
    });

    // results go here //
  });
});