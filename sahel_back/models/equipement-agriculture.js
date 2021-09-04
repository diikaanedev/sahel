const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Equipement = require('./equipement');

const Agriculture = require('./agriculture');

const EquipementAgricole = sequelize.define('equipementAgricole', {

    id : {
        type : Sequelize.INTEGER , 
        primaryKey : true , 
        autoIncrement : true
    },

    nbre_equipement : Sequelize.INTEGER,

    date_acquisisation : Sequelize.DATE ,
     
    prix_achat : Sequelize.INTEGER , 

    valeur_estimative : Sequelize.INTEGER


});


Equipement.belongsToMany(Agriculture, { through: EquipementAgricole });
Agriculture.belongsToMany(Equipement, { through: EquipementAgricole });

module.exports = EquipementAgricole;