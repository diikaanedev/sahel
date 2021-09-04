const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Contry = sequelize.define('contry', {

    code: { type: Sequelize.STRING, unique: true },

    nomPays: { type: Sequelize.STRING, unique: true, }

});

module.exports = Contry;