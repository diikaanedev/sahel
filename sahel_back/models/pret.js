const Sequelize = require('sequelize');

const sequelize = require('../config/db');


const Pret = sequelize.define('pret', {

    object_pret: Sequelize.TEXT,

    montant_solicite: Sequelize.INTEGER,

    apport_personnel: Sequelize.INTEGER,

    montant_percu: Sequelize.INTEGER,

    nbre_mensualite: Sequelize.INTEGER,

    montant_par_mois: Sequelize.INTEGER,

    structureFinanciereId: Sequelize.INTEGER,

    membreId: Sequelize.INTEGER

});

module.exports = Pret;