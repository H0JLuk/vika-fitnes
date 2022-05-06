'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Сlass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        foreignKey: 'IdClass',
        as: 'User',
        through: 'User_Classes',
      });

      this.belongsToMany(models.Сoach, {
        foreignKey: 'IdClass',
        as: 'Сoach',
        through: 'coach_classes',
      });
    }
  }
  Сlass.init(
    {
      name: DataTypes.DATE,
      duration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Сlass',
    },
  );
  return Сlass;
};
