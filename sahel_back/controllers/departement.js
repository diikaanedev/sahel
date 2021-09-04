const departementModel = require('../models/departement');

const regionModel = require('../models/region');

const contryModel = require('./contry');

exports.add = (req, res) => {

    let { regionId, nomDepartement, code } = req.body;

    regionModel.findOne({
        raw: true,
        where: {
            id: regionId
        }
    }).then(result => {
        console.log(result);
        code = `${result.code}-${code}`
        departementModel.create({ regionId, nomDepartement, code }).then((result) => {
            res.json({
                statusCode: 200,
                message: 'Insertion Avec Success',
                data: result
            });
        }).catch((err) => {
            res.json({
                statusCode: 304,
                message: 'Insertion Echouer Avec Success',
                data: err
            });
        });
    });

}

exports.all = (req, res) => {

    departementModel.findAll({
        raw: true,
        include: regionModel,

    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Liste des Départements',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur Listage',
            data: err
        });
    });
}

exports.one = (req, res) => {

    const { id } = req.params;

    departementModel.findOne({
        include: {
            model: regionModel,
            include: contryModel
        },
        raw: true,
        where: {
            id
        }
    }).then(result => {
        res.json({
            statusCode: 200,
            message: 'Departement Trouver avec success',
            data: result
        });
    }).catch(err => {
        res.json({
            statusCode: 304,
            message: 'Erreur',
            data: err
        });
    });

}

exports.update = (req, res) => {

    const { id } = req.params;

    const { nomDepartement } = req.body;

    departementModel.update({ nomDepartement }, { where: { id } }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Modifictation Réussi avec success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur ',
            data: err
        });
    });

}

exports.delete = (req, res) => {

    const { id } = req.params;

    departementModel.destroy({
        where: id
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Supréssion evec Success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur Supréssion',
            data: err
        });
    });

}