
module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
        allowNull: false},
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    scoreCJ: DataTypes.INTEGER,
    scoreEcon: DataTypes.INTEGER, 
    scoreHC: DataTypes.INTEGER,
    scoreImm: DataTypes.INTEGER,
    scoreEdu: DataTypes.INTEGER, 
    scoreEnv: DataTypes.INTEGER,
    totalScore: DataTypes.INTEGER,
    positionOnCJ: DataTypes.STRING,
    positionOnEcon: DataTypes.STRING,
    positionOnHC: DataTypes.STRING,
    positionOnImm: DataTypes.STRING,
    positionOnEdu: DataTypes.STRING,
    positionOnEnv: DataTypes.STRING,
    party: DataTypes.STRING,
    candidateImage: DataTypes.STRING,
  }, {
    freezeTableName: true
  });
  return Candidate;
};
