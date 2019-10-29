// @ts-check
const { ServiceBroker } = require("moleculer");
const ApiService = require("moleculer-web");

const db = require('./server/db-mock');
const { createContactsActions } = require('./server/actions/contacts/_contacts');
const { createDbActions } = require('./server/actions/db/_db');
/** @type any */
const logger = console;
const broker = new ServiceBroker({ logger });

const cors = {
  origin: "*",
  methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
  allowedHeaders: ['Content-Type'],
  exposedHeaders: [],
  credentials: false,
  maxAge: 3600
};

const routes = [{
  aliases: {
    'GET contacts': 'contacts.list',
    'POST contacts': 'contacts.create',
  },
}];

broker.createService({
  name: 'db',
  actions: createDbActions(db),
})

broker.createService({
  name: 'contacts',
  actions: createContactsActions(broker),
  mixins: [ApiService],
  settings: {
    port: 3001,
    routes,
    cors,
  },
});

broker.start();
