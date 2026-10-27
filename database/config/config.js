require('dotenv').config();

module.exports = {
  development: {
    username: "nodeUser1",
    password: 'password123',
    database: "testdb",
    host: "127.0.0.1",
    dialect: 'mysql'
  }
};
