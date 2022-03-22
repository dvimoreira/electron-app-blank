
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'DATABASE_NAME', 
    'USER', 
    'PASSWORD', 
    {
        dialect: 'mysql', 
        host: 'localhost'
    }
);

module.exports = sequelize;