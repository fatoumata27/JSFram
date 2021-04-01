const mysql = require('mysql');
const configuration = require('../config/app');

module.exports = mysql.createConnection(configuration.db);
