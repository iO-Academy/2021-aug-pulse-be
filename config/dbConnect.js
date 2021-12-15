const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://root:password@localhost:27017';
const dbName = 'pulsedb';
const client = new mongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

async function connect() {
    await client.connect();
    return client.db(dbName);
}

module.exports = connect;