const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
module.exports = new Sequelize('d7jtd2f24k7a35', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idel: 10000
    },
});