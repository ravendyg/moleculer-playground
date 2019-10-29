// @ts-check
module.exports.createCreateAction = function createCreateAction(broker) {
  return async function create(ctx) {
    const {
      name,
      email,
    } = ctx.params;
    if (!name || !email) {
      return -1;
    }
    try {
      await broker.call('db.create', { name, email});
    } catch (e) {
      console.error(e);
      return -1;
    }
  };
}
