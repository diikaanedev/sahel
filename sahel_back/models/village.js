const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Commune = require('./commune');

const Village = sequelize.define('village', {

    nomVillage: { type: Sequelize.STRING, unique: true },

    code: { type: Sequelize.STRING, unique: true }

});

Commune.hasMany(Village);
Village.belongsTo(Commune);

module.exports = Village;