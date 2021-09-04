const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const recolteChamps = sequelize.define('recolte-champs' , {

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },


    surface_recolte : Sequelize.INTEGER , 

    code_recolte : {
        type:Sequelize.STRING , 
        unique : true 
    },

    date_recolte : Sequelize.DATE , 

    masse_recolte : Sequelize.INTEGER ,

    cultureId : Sequelize.INTEGER , 

    agricultureId : Sequelize.INTEGER

});

module.exports = recolteChamps ; 