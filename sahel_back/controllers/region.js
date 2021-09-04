const regionModel = require('../models/region');

const contryModel = require('../models/contry');

const getCode = require('../utils/getCode');

exports.add = (req, res) => {
    const body = req.body;

    console.log(req.body);

    let { contryId, nomRegion , code } = req.body;

    contryModel.findOne({
        raw: true,
        where: {
            id: contryId
        }
    }).then(result => {
        console.log(result);
        code = `${result.code}-${code}`
        regionModel.create({ code, contryId, nomRegion }).then((result) => {
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
    })

}

exports.one = (req, res) => {

    const { id } = req.params;

    regionModel.findOne({
        raw: true,
        include: contryModel,
        where: {
            id: id
        }
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Region Trouver Avec Success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: ' Erreur Avec Success',
            data: err
        });
    });

}

exports.all = (req, res) => {

    regionModel.findAll({
        include: contryModel
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Liste des Regions',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur des Regions',
            data: err
        });

    });
}

exports.update = (req, res) => {
    const { id } = req.params;

    const { body } = req;

    regionModel.update({
        nomRegion: body.nomRegion
    }, { where: { id: id } }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Modification succesfully',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 200,
            message: 'Modification failed',
            data: err
        });
    });
}

exports.delete = (req, res) => {
    regionModel.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Suppression Reusion',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 200,
            message: 'Erreur',
            data: err
        });
    });
}