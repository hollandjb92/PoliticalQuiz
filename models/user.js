module.exports = function(sequelize, DataTypes) {
  
var User = sequelize.define("User", {
  id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true,
      allowNull: false},
  email: DataTypes.STRING,
  userPassword: DataTypes.STRING,
  scoreCJ: DataTypes.INTEGER,
  scoreEcon: DataTypes.INTEGER, 
  scoreHC: DataTypes.INTEGER,
  scoreImm: DataTypes.INTEGER,
  scoreEdu: DataTypes.INTEGER, 
  scoreEnv: DataTypes.INTEGER,
  totalScore: DataTypes.INTEGER,
  party: DataTypes.STRING,
  preferredCandidate: DataTypes.STRING,
}, {
  freezeTableName: true
});
  return User;
};