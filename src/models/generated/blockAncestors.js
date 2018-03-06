/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blockAancestors', {
    blockId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'blocks',
        key: 'id'
      }
    },
    ancestorId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'blocks',
        key: 'id'
      }
    }
  }, {
    tableName: 'blockAancestors'
  });
};
