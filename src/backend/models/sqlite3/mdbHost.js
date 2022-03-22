const Sequelize = require('sequelize');
const database = require('../../config/database/sqlite3');

const MdbHost = database.define('mdb_host', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    host: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    },
})

module.exports = MdbHost;