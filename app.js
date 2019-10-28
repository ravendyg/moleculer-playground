const { ServiceBroker } = require("moleculer");
const ApiService = require("moleculer-web");

const db = require('./server/db-mock');
const broker = new ServiceBroker({ logger: console });

broker.createService({
  name: 'contacts',
  actions: {
    list(ctx) {
      const {
        start = 0,
        size = 10,
      } = ctx.params;

      return db.getContacts(start, size);
    },
    create(ctx) {
      const {
        name,
        email,
      } = ctx.params;

      if (!name || !email) {
        return -1;
      }
      return db.createContact(name, email);
    },
  },
  mixins: [ApiService],
  settings: {
    port: 3001,
    routes: [{
      aliases: {
        'GET contacts': 'contacts.list',
        'POST contacts': 'contacts.create',
      },
    }],
  },
});

broker.start();
