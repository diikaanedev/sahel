const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Bete = sequelize.define('bete', {

    matricule: Sequelize.INTEGER,
    
    sexe: Sequelize.STRING,
    
    date_naisse: Sequelize.DATE,
    
    couleur: Sequelize.STRING

});

module.exports = Bete;