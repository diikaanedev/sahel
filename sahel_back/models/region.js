const sequelize = require('../config/db');

const Sequelize = require('sequelize');

const Contry = require('./contry');

const Region = sequelize.define('region', {

    code: { type: Sequelize.STRING, unique: true },

    nomRegion: { type: Sequelize.STRING, unique: true }

});

Contry.hasMany(Region);
Region.belongsTo(Contry);

module.exports = Region;