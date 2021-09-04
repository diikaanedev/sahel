const communeModel = require('../models/commune');

const regionModel = require('../models/region');

const contryModel = require('../models/contry');

const departementModel = require('../models/departement');

exports.add = (req, res) => {

    let  { departementId, nomCommune , code } = req.body;

    console.log(req.body);
    

    departementModel.findOne({
        raw: true,
        where: {
            id: departementId
        }
    }).then(result => {

        code = `${result.code}-${code}`;
        communeModel.create({ departementId, nomCommune, code }).then((result) => {
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

    communeModel.findAll({
        raw: true , 
        include : {
            model:departementModel , 
            include : {
                model:regionModel , 
                include : contryModel
            }
        }
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Liste des Communes',
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

    communeModel.findOne({
        include: {
            model: departementModel,
            include: {
                model: regionModel,
                include: contryModel
            }
        },
        raw: true,
        where: {
            id
        }
    }).then(result => {
        res.json({
            statusCode: 200,
            message: 'Commune Trouver avec success',
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

    const { nomCommune } = req.body;

    communeModel.update({ nomCommune }, { where: { id } }).then((result) => {
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

    communeModel.destroy({
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