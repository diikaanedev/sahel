const Agriculture = require('../models/agriculture');

const Culture = require('../models/culture');

const cultureAgricole = require('../models/culture-agriculture');

const Membre = require('../models/membre');

const Regroument = require('../models/groupement');

const MembreRegroupement = require('../models/membreGroupement');

const MembreAgriculture = require('../models/membreAgriculture');

const CultureModel = require('../models/culture');

exports.add = (req, res) => {

    let { matriculeMembre, matricule, longitude, lattitude, surface_total } = req.body;

    Membre.findOne({
        raw: true,
        where: {
            matricule: matriculeMembre
        }
    }).then((result) => {
        Agriculture.create({
            matricule: matricule,
            longitude: longitude,
            lattitude: lattitude,
            surface_total: surface_total,
        }).then(result1 => {
            MembreAgriculture.create({
                membreId: result.id,
                agricultureId: result1.id
            }).then(result2 => {
                res.json({
                    result, result1, result2
                });
            }).catch(err => {
                res.json({
                    data: err,
                    message: 'Agriculteur not found',
                    statusCode: 304
                })
            })
        }).catch(err => {
            res.json({
                data: err,
                message: 'Member not create',
                statusCode: 304
            });
        });
    });

}

exports.addMember = (req, res) => {

    const { matriculeMembre, matriculeAgriculture } = req.body;

    Membre.findOne({
        raw: true,
        where: {
            matricule: matriculeMembre
        }
    }).then((result) => {
        Agriculture.findOne({
            raw: true,
            where: {
                matricule: matriculeAgriculture
            }
        }).then((result1) => {

            MembreAgriculture.create({
                membreId: result.id,
                agricultureId: result1.id
            }).then((result2) => {
                res.json({
                    data: result2,
                    message: 'Insertion Réussi',
                    statusCode: 200
                })
            }).catch((err) => {
                res.json({
                    message: 'Insertion Member Agriculture incorect',
                    data: err,
                    statusCode: 304
                })
            });
        }).catch((err) => {
            res.json({
                message: 'Agriculture Not Found',
                data: err,
                statusCode: 304
            })
        });
    }).catch((err) => {
        res.json({
            message: 'Member not found',
            data: err,
            statusCode: 304
        })
    });

}

exports.all = (req, res) => {
    Membre.findAll({
        raw : true , 
        include : {
            model : Agriculture , 
            include : {
                model : CultureModel
            }
        }
    }).then((result) => {
        res.json({
            data : result
        })
    }).catch((err) => {
        res.json({
            data : err
        })
    });
}