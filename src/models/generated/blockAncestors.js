/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blockAncestors', {
    blockId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED,
      references: {
        model: 'blocks',
        key: 'id',
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      }
    },
    ancestorId: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'blocks',
        key: 'id',
        onUpdate: 'NO ACTION',
        onDelete: 'NO ACTION'
      }
    }
  }, {
      tableName: 'blockAncestors',
      timestamps: false
  });
};
