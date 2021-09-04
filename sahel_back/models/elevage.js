const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Elevage = sequelize.define('elevage' , {

    marque_identification : Sequelize.STRING , 

    date_acquisition : Sequelize.DATE ,

    date_perte : Sequelize.DATE , 

    motif_perte : Sequelize.STRING

});

module.exports = Elevage ;