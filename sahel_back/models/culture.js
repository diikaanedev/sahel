const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Culture = sequelize.define('culture', {

    nomCulture: { type: Sequelize.STRING  , unique : true} ,  

});


module.exports = Culture;