require('dotenv').config();
const sequelize = require('../models');

(async () => {
  if (process.env.NODE_ENV === 'generate') {
    const result = await sequelize.sync({
      force: true,
    });
    console.log('sync done!', result);
  }
})();
