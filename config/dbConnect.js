const mongoClient = require('mongodb').MongoClient;
const logger = require('../logger/logger');
const url = 'mongodb://root:password@localhost:27017';
const dbName = 'pulsedb';
const client = new mongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

async function connect() {
    await client.connect();
    // logger.info(`MongoDB client is connected...`);
    return client.db(dbName);
}

module.exports = connect;