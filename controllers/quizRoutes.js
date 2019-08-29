const express = require("express"),
  router = express.Router();
var db = require("../models");

let posts = [];

router.get("/api", function (req, res) {
  console.log('statusCode: h', res.statusCode);
  res.send(res.body)

});

router.get("/api/posts", function (req, res) {
  console.log('statusCode: a', res.statusCode);
  db.User.findAll({})
    .then(function (dbPost) {
      res.json(dbPost);
    });

});

router.get("/api/candidates", function (req, res) {
  console.log('statusCode: a', res.statusCode);
  db.Candidate.findAll({
      attributes: ['canname', 'totalScore', 'party', 'candidateImage', "id"]
    })
    .then(function (dbPost) {
      res.json(dbPost);
    });

});

router.post("/api/posts", function (req, res) {
  console.log('statusCode: b', req.statusCode);
  console.log("this here", req.body.email)
  posts.push({
    score: req.body.totalScore
  })
  //res.send('Successfully posted to database')
  console.log(req.body);
  db.User.create({
      id: req.body.id,
      email: req.body.email,
      userPassword: null,
      scoreCJ: null,
      scoreEcon: null,
      scoreHC: null,
      scoreImm: null,
      scoreEdu: null,
      scoreEnv: null,
      totalScore: req.body.totalScore,
      party: null,
      preferredCandidate: null,
      createdAt: null,
      updatedAt: null
    })
    .then(function (dbPost) {
      res.json(dbPost);
    });

});


// PUT route for updating posts
router.put("/api/posts", function (req, res) {
  console.log("put route")
  console.log(req.body)
  db.User.update(req.body, {
      where: {
        email: req.body.email
      }
    })
    .then(function (dbPost) {
      res.json(dbPost);
    });
});




/*
localhost:3000/quiz1/quizOne

router.get("/quiz1/:quizNum", (req, res) => {
  var quizNum = req.params.quizNum

  switch(quiz) {
    case: "quizOne"
    res.render("quizOne")
    break;
    case: "quizTwo"
    res.render("quizTwo")
    break;
    default:
      res.render("quizOne")
  }
})
*/
router.get("/quiz", (req, res) => {
  res.render("quizOne");
})


router.get("/results", (req, res) => {
  res.render("results")
})





module.exports = router;