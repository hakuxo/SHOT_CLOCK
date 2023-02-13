const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Prediction extends Model {}

Prediction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false
    },
    opposing_team: {
      type: DataTypes.STRING,
      allowNull: false
    },
    win: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    loss: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
   winnerScore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    loserScore: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'prediction',
  }
);

module.exports = Prediction;