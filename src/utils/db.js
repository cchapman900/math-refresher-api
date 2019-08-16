const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const mongoString = process.env.DB_CONNECTION_STRING;

const dbExecute = async (db, fn) => db.then(await fn);

module.exports.dbConnectAndExecute = (fn) => {
  return dbExecute(mongoose.connect(mongoString, {useNewUrlParser: true}), fn);
};

module.exports.connect = () => {
  return mongoose.connect(mongoString, {useNewUrlParser: true});
};