const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Membre = sequelize.define('membre', {

    matricule: { type: Sequelize.STRING, unique: true },

    nom: Sequelize.STRING,

    prenom: Sequelize.STRING,

    cin: Sequelize.STRING,

    sexe: Sequelize.STRING,

    prenomPere: Sequelize.STRING,

    nomMere: Sequelize.STRING,

    prenomMere: Sequelize.STRING,

    date_naisse: Sequelize.DATE,

    lieu_naisse: Sequelize.STRING,

    url_photo: Sequelize.STRING,

    niveau_etude: Sequelize.STRING,

    situation_matricule: Sequelize.STRING,

    nbre_epouse: Sequelize.INTEGER,

    nbre_personne_active_en_charge: Sequelize.INTEGER,

    nbre_personne_inactive_en_charge: Sequelize.INTEGER,

    nbre_jeunnes: Sequelize.INTEGER,

    nbre_femmes: Sequelize.INTEGER

});

module.exports = Membre;

