const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const User = sequelize.define('auth', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique  : true ,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
    },
    role: {
        type: Sequelize.TINYINT,
    }
});

module.exports = User;