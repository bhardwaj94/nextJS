const MongoMemoryServer = require('mongodb-memory-server').default;
const mongoose = require('mongoose');

// eslint-disable-next-line no-undef
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
let mongoServer;

beforeAll(async () => {

});

module.exports = async () => {
  mongoServer = new MongoMemoryServer();

  const mongoUri = await mongoServer.getConnectionString();
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  };

  mongoose.connect(
    mongoUri,
    options,
  );
};