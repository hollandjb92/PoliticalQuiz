const express = require("express"),
  router = express.Router();



router.get("/quiz1", (req, res) => {
  res.render("quizOne");
})

router.get("/quiz2", (req, res) => {
  res.render("quizTwo")
})

router.get("/quiz3", (req, res) => {
  res.render("quizThree")
})

router.get("/quiz4", (req, res) => {
  res.render("quizFour")
})

router.get("/quiz5", (req, res) => {
  res.render("quizFive")
})

router.get("/quiz6", (req, res) => {
  res.render("quizSix")
})

router.get("/quiz7", (req, res) => {
  res.render("quizSeven")
})

router.get("/results", (req, res) => {
  res.render("results")
})





module.exports = router;