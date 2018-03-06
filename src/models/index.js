const Sequelize = require('sequelize');
require('sequelize-hierarchy')(Sequelize);

const logger = require('../utils/logger');

const {
  DB,
  DB_USER,
  DB_PASSWORD,
  DB_LOGGING,
  DB_MAX_POOL,
} = process.env;

const sequelize = new Sequelize(DB, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  pool: {
    max: DB_MAX_POOL,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false,
  logging: DB_LOGGING === 'true' ? logger.info : false,
});

const Blocks = require('./Blocks')(sequelize, Sequelize);
const BlockAncestors = require('./generated/blockAncestors')(sequelize, Sequelize);

const hierarchyOpts = {
  // as: 'blockAncestors',
  // through: 'blockAncestors',
  // throughTable: 'blockAncestors',
  camelThrough: true,
  labels: true,
};

Blocks.isHierarchy(hierarchyOpts);
// Blocks.rebuildHierarchy(hierarchyOpts);

module.exports = {
  Blocks,
  BlockAncestors,
  sequelize,
};
