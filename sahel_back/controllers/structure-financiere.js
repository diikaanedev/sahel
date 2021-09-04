const structureFinanciereModel = require('../models/structure-financiere');

exports.add = (req  , res) => {

    structureFinanciereModel.create(req.body).then((result) => {
        res.json({
            message : 'Insertion Réussi' , 
            data : result , 
            statusCode : 200
        });
    }).catch((err) => {
        res.json({
            message : 'Erreur !!!' , 
            data : err , 
            statusCode : 200
        })
    });

}

exports.all = (req , res) => {
    structureFinanciereModel.findAll({
        raw : true
    }).then((result) => {
        res.json({
            message : 'Listage Réussi' , 
            data : result , 
            statusCode : 200
        });
    }).catch((err) => {
        res.json({
            message : 'Erreur !!!' , 
            data : err , 
            statusCode : 200
        })
    });
}