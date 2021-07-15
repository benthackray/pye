const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pie extends Model {}

Pie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    labels: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pie',
  }
);

module.exports = Pie;
