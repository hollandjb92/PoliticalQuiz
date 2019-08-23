// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/database.js");

// Creates a "Candidate" model that matches up with DB
var User = sequelize.define("User", {
  id: {
      type: Sequelize.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
      allowNull: false},
  email: Sequelize.STRING,
  userPassword: Sequelize.STRING,
  scoreCJ: Sequelize.INTEGER,
  scoreEcon: Sequelize.INTEGER, 
  scoreHC: Sequelize.INTEGER,
  scoreImm: Sequelize.INTEGER,
  scoreEdu: Sequelize.INTEGER, 
  scoreEnv: Sequelize.INTEGER,
  totalScore: Sequelize.INTEGER,
  party: Sequelize.STRING,
  preferredCandidate: Sequelize.STRING,
}, {
  freezeTableName: true
});

// Syncs with DB
User.sync();

//exports the user model
module.exports = User;