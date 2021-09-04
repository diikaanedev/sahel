const especeModel = require('../models/espece');

const agricultureModel = require('../models/agriculture');

const membreModel = require('../models/membre');

const animauxTraitModel = require('../models/animaux-trait');

exports.add = (req, res) => {

    let { code, nomEspece } = req.body;

    especeModel.create({
        code,
        nomEspece
    }).then((result) => {
        res.json({
            message: 'Insertion Réussi',
            data: result,
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

    especeModel.findAll({
        raw: true
    }).then((result) => {
        res.json({
            message: 'Listage Réussi',
            data: result,
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

exports.addAnimauxTrait = (req , res) => {

    let { idEspece, nombre, matricule } = req.body;

    agricultureModel.findOne({
        raw: true,
        where: {
            matricule
        }
    }).then(_ => {
        
        animauxTraitModel.create({ idEspece, agricultureId : _.id, nombre }).then(result => {            
            res.json({
                message: 'Insertion Réuissi',
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

    }).catch((err) => {
        res.json({
            message: 'Ereur !!!',
            data: err,
            statusCode: 304
        })
    });


}

exports.listerAnimauxTraitMember = (req, res) => {
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
            model: especeModel ,
            include : {
                model : agricultureModel
            }
            
        }]
    }).then((result) => {
        res.json({
            message: 'liste des Animaux Trait ',
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