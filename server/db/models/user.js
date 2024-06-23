"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Token }) {
      this.hasMany(Token, { foreignKey: "userId" });
    }
    static associate({ Message }) {
      this.hasMany(Message, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      login: DataTypes.TEXT,
      password: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
