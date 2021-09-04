const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Membre = require('./membre');

const Groupement = require('./groupement');

const membreGroupement = sequelize.define('membreGroupement', {


    is_active: { type: Sequelize.TINYINT, defaultValues: '1' },

    anneeEntre: { type: Sequelize.TINYINT, defaultValues: '2020' }


});


Membre.belongsToMany(Groupement, { through: membreGroupement });
Groupement.belongsToMany(Membre, { through: membreGroupement });

module.exports = membreGroupement;