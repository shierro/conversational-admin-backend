/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('blocks', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
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
		heirarchyLevel: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		}
	}, {
		tableName: 'blocks'
	});
};
