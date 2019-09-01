module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};
