module.exports = function (sequelize, DataTypes) {
  var Candidate = sequelize.define("Candidate", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    canname: DataTypes.STRING,
    scoreCJ: DataTypes.INTEGER,
    scoreEcon: DataTypes.INTEGER,
    scoreHC: DataTypes.INTEGER,
    scoreEdu: DataTypes.INTEGER,
    scoreEnv: DataTypes.INTEGER,
    scoreImm: DataTypes.INTEGER,
    scoreAge: DataTypes.INTEGER,
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

/*
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm,  scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Joe Biden", 21, 20, 22, 30, 30, 20, 76, 219, "Democrat", "/images/biden.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Cory Booker", 30, 20, 30, 11, 30, 11, 50, 182, "Democrat", "/images/booker.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Pete Buttigieg", 30, 30, 30, 11, 30, 11, 37, 179, "Democrat", "/images/buttigieg.jpg.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Julian Castro", 30, 30, 30, 12, 30, 12, 44, 148, "Democrat", "/images/castro.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Kamala Harris", 30, 20, 30, 21, 30, 12, 54, 197, "Democrat", "/images/harris.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Elizabeth Warren", 30, 30, 30, 11, 20, 12, 70, 203, "Democrat", "/images/warren.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Andrew Yang", 30, 11, 30, 2, 30, 21, 44, 168, "Democrat", "/images/yang.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Bernie Sanders", 30, 30, 30, 21, 16, 12, 77, 216, "Democrat", "/images/sanders.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Beto O'Rourke", 30, 30, 16, 25, 20, 21, 46, 188, "Democrat", "/images/beto.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Kirsten Gillibrand", 30, 25, 30, 20, 25, 12, 52, 194, "Democrat", "/images/gillibrand.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Tulsi Gabbard", 30, 30, 30, 25, 11, 20, 38, 184, "Democrat", "/images/gabbard.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Marianne Williamson", 25, 30, 20, 25, 21, 12, 67, 200, "Democrat", "/images/williamson.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Donald Trump", 11, 3, 12, 7, 7, 21, 73, 134, "Republican", "/images/trump.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
INSERT INTO politicalQuiz.candidate (canname, scoreCJ, scoreEcon, scoreHC, scoreEDU, scoreEnv, scoreImm, scoreAge, totalScore, party, candidateImage, createdAt, updatedAt )
VALUES ("Bill Weld", 16, 3, 20, 16, 20, 15, 74, 164, "Republican", "/images/weld.jpg", '9999-12-31 23:59:59', '9999-12-31 23:59:59');
*/