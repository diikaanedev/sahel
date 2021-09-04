const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Espece = sequelize.define('espece' ,{
    
    nomEspece :Sequelize.STRING , 

    code : {
        type:Sequelize.STRING ,
        unique : true
    }

});

module.exports = Espece ;