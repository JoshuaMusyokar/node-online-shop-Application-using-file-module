const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-demo', 'root', 'joshua', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
