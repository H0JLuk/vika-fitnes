'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    static associate(models) {
      this.belongsTo(models.Sport);
    }
  }

  Timetable.init(
    {
      week_day: DataTypes.INTEGER,
      time_start: DataTypes.TIME,
      time_end: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: 'Timetable',
      timestamps: false,
    },
  );

  return Timetable;
};
