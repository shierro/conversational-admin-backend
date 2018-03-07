require('dotenv').config();
const { sequelize } = require('../models');

(async () => {
  if (process.env.NODE_ENV === 'generate') {
    await sequelize.sync({ force: true });
    const userSql = "INSERT INTO `conversational`.`users`(`id`, `firstName`, `lastName`, `createdAt`, `updatedAt`, `username`, `password`, `type`) VALUES ('1', 'Master', 'Account', '2017-12-22 19:38:24', '2017-12-22 19:38:24', 'master', '$2a$10$YO7UXs0bM9SNtkoxfFOWNeTYgJYpFrIAXbwq5ddesSDjYvGW7JPzK', 'admin')";
    const answerAql = "INSERT INTO `conversational`.`answers` (`id`, `type`, `text`) VALUES (1, 'question', 'having fun yet?');";
    const blockSql = "INSERT INTO `conversational`.`blocks` (`id`, `createdAt`, `updatedAt`, `hierarchyLevel`, `userId`, `name`, `answerId`) VALUES ('1', '2017-12-29 18:53:11', '2017-12-29 18:53:11', '1', '1', 'first block', 1);";
    const msg1Sql = "INSERT INTO `conversational`.`messages` (`id`, `blockId`, `text`, `type`) VALUES (1, 1, 'Welcome this is the first message!', 'message');";
    const msg2Sql = "INSERT INTO `conversational`.`messages` (`id`, `blockId`, `text`, `type`) VALUES (2, 1, 'Welcome this is the second message!', 'message');";
    await sequelize.query(userSql);
    await sequelize.query(answerAql);
    await sequelize.query(blockSql);
    await sequelize.query(msg1Sql);
    await sequelize.query(msg2Sql);
    console.log('sync done!');
  }
})();
