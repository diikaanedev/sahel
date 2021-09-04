const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Membre = require('./membre');

const Eleveur = require('./elevage');

const membreEleveur = sequelize.define('membreEleveur');


Membre.belongsToMany(Eleveur, { through: membreEleveur });
Eleveur.belongsToMany(Membre, { through: membreEleveur });

module.exports = membreEleveur;

