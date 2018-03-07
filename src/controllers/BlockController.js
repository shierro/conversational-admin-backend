/* eslint-disable object-curly-newline, max-len */
const {
  Blocks,
  Messages,
} = require('../models');

const logger = require('../utils/logger');


const create = async (req, res, next) => {
  try {
    const { block, messages } = req.body;
    const newBlock = await Blocks.create(block);
    const blockMessages = messages.map(text => ({ blockId: newBlock.id, text }));
    const newMessages = await Messages.bulkCreate(blockMessages);
    res.json({ newBlock, newMessages });
  } catch (e) {
    logger.error(e);
    next({
      status: 400,
      message: JSON.stringify(e),
    });
  }
};

const getHierarchy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const heirarcy = await Blocks.getHierarchy(id);
    if (heirarcy) {
      return res.json(heirarcy);
    }
    return next({ status: 404, message: 'nothing found' });
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  create,
  getHierarchy,
};
