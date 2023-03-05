const mongoose = require('mongoose');

const host = process.env.MONGO_HOST || '127.0.0.1';
const port = process.env.MONGO_PORT || 27017;

const database = process.env.MONGO_DATABASE || 'goit_interview';
const defaultUri = `mongodb://${host}:${String(port)}/${database}`;

const uri = process.env.MONGO_URI || defaultUri;

async function initMongo() {
  await mongoose.connect(uri);

  console.log('Connected to MongoDB.');
}

module.exports = initMongo;
