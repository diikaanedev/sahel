const equipementModel = require('../models/equipement');

const equipementAgricoleModel = require('../models/equipement-agriculture');

const agricultureModel = require('../models/agriculture');

const membreModel = require('../models/membre');

exports.add = (req, res) => {

    let { code, nomMateriel } = req.body;

    equipementModel.create({
        code,
        nomMateriel
    }).then((result) => {
        res.json({
            message: 'Insertion réussi',
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

exports.all = (req, res) => {
    equipementModel.findAll({
        raw: true
    }).then((result) => {
        res.json({
            message: 'Listage réussi',
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

exports.addEquipementExploitant = (req, res) => {
    let {
        equipementId,
        matricule,
        date_acquisisation,
        prix_achat,
        valeur_estimative,
        nbre_equipement
    } = req.body;

    agricultureModel.findOne({
        raw: true,
        where: {
            matricule
        }
    }).then((result) => {
        equipementAgricoleModel.create({
            equipementId, date_acquisisation, prix_achat, valeur_estimative, agricultureId: result.id, nbre_equipement
        }).then((_result) => {
            res.json({
                message: 'Insertion Success',
                statusCode: 200,
                data: _result
            })
        }).catch((err) => {
            res.json({
                message: 'Erreur !!',
                statusCode: 304,
                data: err
            })
        });
    }).catch((err) => {
        res.json({
            message: 'Erreur !!',
            statusCode: 304,
            data: err
        })
    });
}

exports.listeEquipementExploitant = (req, res) => {
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
                model: equipementModel,
                include: {
                    model: agricultureModel
                }

            }]
    }).then((result) => {
        res.json({
            message: 'liste des Equipements ',
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
