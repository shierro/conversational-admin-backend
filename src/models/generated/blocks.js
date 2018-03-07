/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('blocks', {
		id: {
			type: DataTypes.BIGINT.UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			unsigned: true,
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
		userId: {
			type: DataTypes.BIGINT.UNSIGNED,
			unsigned: true,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
				onUpdate: 'NO ACTION',
				onDelete: 'NO ACTION'
			}
		},
		answerId: {
			type: DataTypes.BIGINT.UNSIGNED,
			unsigned: true,
			allowNull: false,
			references: {
				model: 'answers',
				key: 'id',
				onUpdate: 'NO ACTION',
				onDelete: 'NO ACTION'
			}
		},
		hierarchyLevel: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		}
	}, {
		tableName: 'blocks'
	});
};
