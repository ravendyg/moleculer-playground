const { createListAction } = require('./list');
const { createCreateAction } = require('./create');

function createDbActions(db) {
  return {
    list: createListAction(db),
    create: createCreateAction(db),
  };
};

module.exports = {
  createDbActions,
};
