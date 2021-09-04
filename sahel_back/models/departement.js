const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Region = require('./region');

const Departement = sequelize.define('departement', {

    nomDepartement: { type: Sequelize.STRING, unique: true, },
    code: { type: Sequelize.STRING, unique: true }

});

Region.hasMany(Departement);
Departement.belongsTo(Region);

module.exports = Departement;