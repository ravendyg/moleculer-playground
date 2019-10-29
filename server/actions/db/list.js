// @ts-check
module.exports.createListAction = function createListAction(db) {
  return function list(ctx) {
    const {
      start,
      size,
    } = ctx.params;

    return db.getContacts(start, size);
  };
}
