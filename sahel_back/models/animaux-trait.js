const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const especeModel = require('./espece');

const agricultureModel = require('./agriculture');

const AnimauxTrait = sequelize.define('animauxtrait', {

    id : {
        type : Sequelize.INTEGER , 
        primaryKey : true , 
        autoIncrement : true
    },

    nombre : Sequelize.INTEGER , 

});


especeModel.belongsToMany(agricultureModel, { through: AnimauxTrait });
agricultureModel.belongsToMany(especeModel, { through: AnimauxTrait });

module.exports = AnimauxTrait;