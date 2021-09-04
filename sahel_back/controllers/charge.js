const chargeModel = require('../models/charge');

const chargeAgricole = require('../models/charge-agriculture');

const agricultureModel = require('../models/agriculture');

const membreModel = require('../models/membre');

exports.add = (req, res) => {

    let { code, designation } = req.body;

    let body = {
        code,
        designation,
    };

    chargeModel.create(body).then((_result) => {
        res.json({
            message: 'Insertion succes',
            data: _result,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: 'Erreur Creation',
            data: err,
            statusCode: 304
        })
    });

}

exports.addChargeExploitant = (req, res) => {

    let { chargeId, matricule, prix_unitaire, nbre_quantite } = req.body;

    agricultureModel.findOne({
        raw: true,
        where: {
            matricule
        }
    }).then((result) => {
        chargeAgricole.create({
            chargeId,
            agricultureId: result.id,
            prix_unitaire,
            nbre_quantite
        }).then((_result) => {
            res.json({
                data: _result,
                message: 'Insertion Success',
                statusCode: 200
            })
        }).catch((err) => {
            res.json({
                data: err,
                message: 'Erreur !!!',
                statusCode: 304
            })
        });
    }).catch((err) => {
        res.json({
            message: 'Erreur ',
            data: err,
            statusCode: 304
        })
    });

}

exports.listeChargeExploitant = (req, res) => {
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
            model: chargeModel ,
            include : {
                model : agricultureModel
            }
            
        }]
    }).then((result) => {
        res.json({
            message: 'liste des charge ',
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
exports.all = (req, res) => {
    chargeModel.findAll({
        nest: true
    }).then((result) => {
        res.json({
            message: 'liste des charge ',
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

exports.one = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}