const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const recolteChamps = require('./recolte-champs');

const operateurStocker = require('./operateur-stocker');

const Commercialisation = sequelize.define('commercialisation', {

    
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    curcuit : Sequelize.STRING , 
    date_payement : Sequelize.DATE , 
    numero_quitance : Sequelize.STRING , 
    prix : Sequelize.INTEGER , 

});


recolteChamps.belongsToMany(operateurStocker, { through: Commercialisation });
operateurStocker.belongsToMany(recolteChamps, { through: Commercialisation });

module.exports = Commercialisation;