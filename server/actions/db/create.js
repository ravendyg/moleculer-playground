// @ts-check
module.exports.createCreateAction = function createCreateAction(db) {
  return function create(ctx) {
    const {
      name,
      email,
    } = ctx.params;

    return db.createContact(name, email);
  };
}
