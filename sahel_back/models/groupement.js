const Sequilize = require('sequelize');

const sequelize = require('../config/db');

const villageModel = require('./village');


const Groupement = sequelize.define('groupement', {

    nomGroupement: { type: Sequilize.STRING, unique: true },

    nomPresident: { type: Sequilize.STRING },

    telephonePresident: Sequilize.STRING,

    nomSG: Sequilize.STRING,

    telephoneSG: { type: Sequilize.STRING, unique: true },

    nomTresorier: Sequilize.STRING,

    telephoneTresorier: Sequilize.STRING,

});

villageModel.hasMany(Groupement);
Groupement.belongsTo(villageModel);

module.exports = Groupement;