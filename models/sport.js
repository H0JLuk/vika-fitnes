'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sport extends Model {
    static associate(models) {
      this.hasMany(models.Timetable, {
        foreignKey: 'SportId',
        as: 'timetables',
      });
    }
  }
  Sport.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sport',
      timestamps: false,
    },
  );
  return Sport;
};
