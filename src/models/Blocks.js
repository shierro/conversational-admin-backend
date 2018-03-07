/* eslint-disable prefer-promise-reject-errors */

module.exports = (sequelize, Sequelize) => {
  const Blocks = require('./generated/blocks')(sequelize, Sequelize);
  const Users = require('./generated/users')(sequelize, Sequelize);
  const Messages = require('./generated/messages')(sequelize, Sequelize);

  Blocks.getHierarchy = async (id) => {
    const hierarchy = await Blocks.findOne({
      where: { id },
      include: [
        { model: Users, as: 'user', attributes: ['id', 'firstName', 'lastName'] },
        { model: Messages, as: 'messages' },
        {
          model: Blocks,
          as: 'descendents',
          hierarchy: true,
          include: [
            { model: Messages, as: 'messages' },
          ],
        },
      ],
    });
    if (!hierarchy) {
      return Promise.reject({ status: 400, message: 'User not found' });
    }
    return hierarchy;
  };

  return Blocks;
};
