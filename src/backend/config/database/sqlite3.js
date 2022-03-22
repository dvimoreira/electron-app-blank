
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: '../database/config.db'
    }
);

module.exports = sequelize;