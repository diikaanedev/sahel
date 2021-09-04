const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const villageModel = require('./village');

const Concession = sequelize.define('concession', {

    matriculeConcession: { type: Sequelize.STRING, unique: true },

    nomProprietaire: Sequelize.STRING,

    prenomProprietaire: Sequelize.STRING,

    nomConcession: Sequelize.STRING,

    nbreCase: Sequelize.INTEGER,

    nbreChambre: Sequelize.INTEGER,

    approvisEau: Sequelize.STRING,

    sourceEnergie: Sequelize.STRING

});

villageModel.hasMany(Concession);
Concession.belongsTo(villageModel);

module.exports = Concession;