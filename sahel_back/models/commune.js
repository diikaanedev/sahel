const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Departement = require('./departement');

const Commune = sequelize.define('Commune', {

    nomCommune: { type: Sequelize.STRING, unique: true, },
    code: { type: Sequelize.STRING, unique: true }

});

Departement.hasMany(Commune);
Commune.belongsTo(Departement);

module.exports = Commune;