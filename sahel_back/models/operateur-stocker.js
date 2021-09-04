const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const OperateurStocker = sequelize.define('operateur-stocker', {
    matricule: { type: Sequelize.STRING, unique: true },

    nom: Sequelize.STRING,

    prenom: Sequelize.STRING,

    cin: Sequelize.STRING,

    sexe: Sequelize.STRING,

    email: {
        type: Sequelize.STRING,
        unique: true
    },

    telephone: {
        type: Sequelize.STRING,
        unique: true
    }

});

module.exports = OperateurStocker;
