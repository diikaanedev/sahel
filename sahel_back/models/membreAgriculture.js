const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Membre = require('./membre');

const Agricultutre = require('./agriculture');

const membreAgriculture = sequelize.define('membreAgriculture');


Membre.belongsToMany(Agricultutre, { through: membreAgriculture });
Agricultutre.belongsToMany(Membre, { through: membreAgriculture });

module.exports = membreAgriculture;