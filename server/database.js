const { Client } = require('pg');

async function connectDb(config) {
  const client = new Client(config);
  await client.connect();
}

module.exports = connectDb;
