/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
    },
    firstName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(258),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: 'admin'
    }
  }, {
      tableName: 'users'
    });
};
