// @ts-check
module.exports.createListAction = function createListAction(broker) {
  return async function list(ctx) {
    const {
      start,
      size,
    } = ctx.params;
    const _start = parseInt(start) || 0;
    const _size = parseInt(size) || 10;

    try {
      const res = await broker.call('db.list', { start: _start, size: _size, })
      return res;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
