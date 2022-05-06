'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Timetable.init({
    week_day: DataTypes.INTEGER,
    time_start: DataTypes.TIME,
    time_end: DataTypes.TIME,
    sport_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Timetable',
  });
  return Timetable;
};