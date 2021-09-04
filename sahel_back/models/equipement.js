const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Equipement = sequelize.define('equipement', {
    
    nomMateriel: { type: Sequelize.STRING, } , 

    code : {
        type:Sequelize.STRING , 
        unique : true
    }
   

});

module.exports = Equipement;