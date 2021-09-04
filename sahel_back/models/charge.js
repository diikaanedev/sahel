const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Charge = sequelize.define('charge' , {

    designation : Sequelize.STRING , 

    code : {
        type : Sequelize.STRING , 
        unique : true
    },


});

module.exports = Charge ;