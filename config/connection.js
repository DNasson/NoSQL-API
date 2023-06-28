const { connect, connection } = require('mongoose');

const connectionstring = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentDB';

connect (connectionstring);

module.exports = connection;