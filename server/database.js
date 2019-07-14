const mongoose = require('mongoose');

module.exports = () => {
  const mongodb_user = process.env.MONGODB_USER;
  const mongodb_password = process.env.MONGODB_PASSWORD;
  const mongodb_db = process.env.MONGODB_DATABASE || 'protofy';
  const mongodb_host = process.env.MONGODB_SERVICE_HOST || 'localhost';
  const mongodb_port = process.env.MONGODB_SERVICE_PORT || '27017';
  const db_service = process.env.MONGODB_SERVICE_NAME || 'mongodb';

  let identifiers = '';

  if (mongodb_password && mongodb_user) {
    identifiers = `${mongodb_user}:${mongodb_password}@`;
  }

  const mongoDb = `${db_service || 'mongodb'}://${identifiers}${mongodb_host}:${mongodb_port}/${mongodb_db}`;

  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  };

  mongoose.connect(
    mongoDb,
    options,
  );
};