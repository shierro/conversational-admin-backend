/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('answers', {
		id: {
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.STRING(16),
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
		text: {
			type: DataTypes.STRING(45),
			allowNull: false
		}
	}, {
		tableName: 'answers'
	});
};
