// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/database.js");

// Creates a "User" model that matches up with DB
var Candidate = sequelize.define("Candidate", {
  id: {
      type: Sequelize.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
      allowNull: false},
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  scoreCJ: Sequelize.INTEGER,
  scoreEcon: Sequelize.INTEGER, 
  scoreHC: Sequelize.INTEGER,
  scoreImm: Sequelize.INTEGER,
  scoreEdu: Sequelize.INTEGER, 
  scoreEnv: Sequelize.INTEGER,
  totalScore: Sequelize.INTEGER,
  positionOnCJ: Sequelize.STRING,
  positionOnEcon: Sequelize.STRING,
  positionOnHC: Sequelize.STRING,
  positionOnImm: Sequelize.STRING,
  positionOnEdu: Sequelize.STRING,
  positionOnEnv: Sequelize.STRING,
  party: Sequelize.STRING,
  candidateImage: Sequelize.STRING,
}, {
  freezeTableName: true
});

// Syncs with DB
Candidate.sync();

//exports the user model
module.exports = Candidate;