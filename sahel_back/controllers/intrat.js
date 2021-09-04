const agricultureModel = require('../models/agriculture');

const intratModel = require('../models/intrat');

const membreModel = require('../models/membre');

const intratAgricultureModel = require('../models/intrat-agriculture');

exports.add = (req, res) => {

    let { code, designation } = req.body;

    intratModel.create({ code, designation }).then((result) => {
        res.json({
            message: 'Insertion réussi',
            statusCode: 200,
            data: result
        })
    }).catch((err) => {
        res.json({
            message: 'Erreur !!!',
            data: err,
            statusCode: 304
        })
    });

}

exports.all = (_req, res) => {
    intratModel.findAll({
        raw: true
    }).then((result) => {
        res.json({
            message: 'Liste des Intrats',
            data: result,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: 'Erreur !!',
            data: err,
            statusCode: 304
        })
    });
}

exports.addIntratChamps = (req, res) => {

    let { intratId, matricule, quantite_demande, quantite_recu, quantite_utilise, prix_kilo } = req.body;

    agricultureModel.findOne({
        raw : true , 
        where : {
            matricule
        }
    }).then((result) => {
        intratAgricultureModel.create({
            intratId, quantite_demande, quantite_recu, quantite_utilise, agricultureId:result.id ,prix_kilo
        }).then((_result) => {
            res.json({
                message : 'Insertion Success' , 
                statusCode : 200 , 
                data : _result
            })            
        }).catch((err) => {
            res.json({
                message : 'Erreur !!' , 
                statusCode : 304 , 
                data : err
            })            
        });
    }).catch((err) => {
        res.json({
            message : 'Erreur !!' , 
            statusCode : 304 , 
            data : err
        })            
    });

}

exports.listeIntratExploitant = (req, res) => {
    let { matricule } = req.body;

    agricultureModel.findAll({
        nest: true,
        include: [
            {
            model: membreModel,
            where: {
                matricule
            }
        }, {
            model: intratModel ,
            include : {
                model : agricultureModel
            }
            
        }]
    }).then((result) => {
        res.json({
            message: 'liste des Intrats ',
            data: result,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: 'Erreur Listage',
            data: err,
            statusCode: 304
        })
    });


}