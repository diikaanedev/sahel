const operateurStockerModel = require('../models/operateur-stocker');

exports.add = (req, res) => {
    operateurStockerModel.create(req.body).then((result) => {
        res.json({
            data: result,
            message: 'Insertion Réusi',
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: 'Erreur !',
            data: err,
            statusCode: 304
        })
    });
}

exports.all = (req, res) => {
    operateurStockerModel.findAll({
        raw : true 
    }).then((result) => {
        res.json({
            message : 'Listage Réussi' , 
            data : result , 
            statusCode : 200 
        })
    }).catch((err) => {
        res.json({
            message : 'Erreur !',
            data : err,
            statusCode : 304
        })
    });
}