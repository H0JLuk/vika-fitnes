'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  User_Classes.init(
    {
      IdUser: DataTypes.INTEGER,
      IdClass: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User_Classes',
    },
  );
  return User_Classes;
};
