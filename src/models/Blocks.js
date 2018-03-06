/* Add your custom functions here */

module.exports = (sequelize, Sequelize) => {
  const Blocks = require('./generated/blocks')(sequelize, Sequelize);

  // ProductCodes.yourComplexFunction = (params, additionalComplexity) =>
  //   ProductCodes.find({ params }, {
  //     where: {
  //       additionalComplexity
  //     }
  //   });

  return Blocks;
};
