const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Agriculture = require('./agriculture');

const Charge = require('./charge');

const ChargeAgricole = sequelize.define('chargeAgricole', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nbre_quantite : Sequelize.INTEGER , 

    prix_unitaire : Sequelize.INTEGER
});


Charge.belongsToMany(Agriculture, { through: ChargeAgricole });
Agriculture.belongsToMany(Charge, { through: ChargeAgricole });

module.exports = ChargeAgricole; 