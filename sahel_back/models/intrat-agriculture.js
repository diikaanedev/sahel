const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Agriculture = require('./agriculture');

const Intrat = require('./intrat');

const IntratAgricole = sequelize.define('intratAgricole', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    quantite_demande : Sequelize.INTEGER , 

    quantite_recu : Sequelize.INTEGER,
    
    quantite_utilise : Sequelize.INTEGER , 

    prix_kilo : Sequelize.INTEGER , 
});


Intrat.belongsToMany(Agriculture, { through: IntratAgricole });
Agriculture.belongsToMany(Intrat, { through: IntratAgricole });

module.exports = IntratAgricole; 