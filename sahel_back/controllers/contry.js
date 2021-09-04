
const contryModel = require('../models/contry');

exports.add = (req, res) => {

    let {nomPays , code } = req.body;

    code = code.toUpperCase();


    contryModel.create({nomPays , code}).then((result) => {
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


}

exports.all = (req, res) => {
    contryModel.findAll({
        raw: true
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Liste des Pays',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 200,
            message: 'Erreur Lhors de laffichage',
            data: err
        });

    });
}

exports.one = (req, res) => {
    const { id } = req.params;

    contryModel.findOne({
        raw: true,
        where: {
            id: id
        }
    }).then(result => {
        res.json({
            statusCode: 200,
            message: 'Affichage de ce Pays',
            data: result
        });
    }).catch(err => {
        res.json({
            statusCode: 200,
            message: 'Erreur de ce Pays',
            data: err
        });
    })
}

exports.update = (req, res) => {
    const { id } = req.params;

    contryModel.update({ nomPays: req.body.nomPays, code: req.body.code }, { where: { id: id } }).then(result => {
        res.json({
            statusCode: 200,
            message: 'Modification succesfully',
            data: result
        });
    }).catch(err => {
        res.json({
            statusCode: 200,
            message: 'Modification failed',
            data: err
        });
    });
}

exports.delete = (req, res) => {

    contryModel.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => res.json({
        statusCode: 200,
        message: 'Suppression Reusion',
        data: result
    }));

}

