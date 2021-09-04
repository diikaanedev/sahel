const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Agriculture = sequelize.define('agriculture', {

    matricule: { type: Sequelize.STRING, unique: true },

    longitude: Sequelize.STRING,

    lattitude: Sequelize.STRING,

    surface_total: Sequelize.INTEGER,

    surface_cultive: {
        type: Sequelize.INTEGER,
        defaultValues : 0  
    },

    surface_mise_en_jachere: {
        type: Sequelize.INTEGER,
        defaultValues: 0
    }

});

module.exports = Agriculture;