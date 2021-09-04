const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const structureFinanciere = sequelize.define('structure-financiere', {

    matricule: { type: Sequelize.STRING, unique: true },

    nom: Sequelize.STRING,


    email: {
        type: Sequelize.STRING,
        unique: true
    },

    telephone: {
        type: Sequelize.STRING,
        unique: true
    } , 
    adresse: {
        type: Sequelize.STRING,
    } , 

});

module.exports = structureFinanciere;
