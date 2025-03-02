'use strict';
const {Model} = require('sequelize');
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  // Hash password before creating a new user
  // User.beforeCreate(async (user) => {
  //   user.password = await bcrypt.hash(user.password, 10);
  // });
  User.associate = function (models) {
    User.hasMany(models.Item, { foreignKey: 'user_id', as: 'items' });
  };
  

  return User;
};