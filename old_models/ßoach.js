'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Сoach extends Model {
    static associate(models) {
      this.belongsToMany(models.Сlass, {
        foreignKey: 'IdСoach',
        as: 'Сlass',
        through: 'coach_classes',
      });
    }
  }

  Сoach.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Сoach',
    },
  );

  return Сoach;
};
