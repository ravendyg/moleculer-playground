// @ts-check
const { createListAction } = require('./list');
const { createCreateAction } = require('./create');

function createContactsActions(broker) {
  return {
    list: createListAction(broker),
    create: createCreateAction(broker),
  };
};

module.exports = {
  createContactsActions,
};
