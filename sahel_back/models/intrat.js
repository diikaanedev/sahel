const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Intrat = sequelize.define('intrat', {

    designation: Sequelize.STRING,

    code: {
        type: Sequelize.STRING,
        unique: true
    },

});


module.exports = Intrat;