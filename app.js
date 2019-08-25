const express = require("express"),
  passport = require("passport"),
  LocalStrategy = require("passport-local");
var session = require("express-session");


const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
var db = require("./models");

app.use(express.urlencoded({
  extended: true
}))

app.use(express.json())
app.use(express.static(__dirname + "/public"));


//PASSPORT CONFIG GOES HERE
app.use(session({
  secret: "keyboard cat",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("login", )
})

const quizRoutes = require("./controllers/quizRoutes");
const authRoutes = require("./controllers/authRoutes");


app.use("/", [quizRoutes, authRoutes])

// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});