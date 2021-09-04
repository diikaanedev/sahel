const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Culture = require('./culture');

const Agriculture = require('./agriculture');

const cultureAgricole = sequelize.define('cultureAgricole', {

    id : {
        type : Sequelize.INTEGER , 
        primaryKey : true , 
        autoIncrement : true
    },

    surface_cultive: { type: Sequelize.INTEGER },


});



Culture.belongsToMany(Agriculture, { through: cultureAgricole });
Agriculture.belongsToMany(Culture, { through: cultureAgricole  });


module.exports = cultureAgricole;       