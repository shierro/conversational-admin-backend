/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('messages', {
		id: {
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		blockId: {
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: false,
			references: {
				model: 'blocks',
				key: 'id',
				onUpdate: 'NO ACTION',
				onDelete: 'NO ACTION'
			}
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		type: {
			type: DataTypes.STRING(16),
			allowNull: false,
			defaultValue: 'message'
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
		}
	}, {
		tableName: 'messages'
	});
};
