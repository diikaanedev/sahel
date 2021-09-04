const VillageModel = require('../models/village');

const regionModel = require('../models/region');

const communeModel = require('../models/commune');

const contryModel = require('../models/contry');

const departementModel = require('../models/departement');

exports.add = (req, res) => {

    let { CommuneId, nomVillage, code } = req.body;

    console.log(req.body);


    communeModel.findOne({
        raw: true,
        where: {
            id: CommuneId
        }
    }).then(result => {
        console.log(result);
        code = `${result.code}-${code}`
        VillageModel.create({ CommuneId, nomVillage, code }).then((result) => {
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

    VillageModel.findAll({
        raw: true,
        include: {
            model: communeModel,
            include: {
                model: departementModel,
                include: {
                    model: regionModel,
                    include: contryModel
                }
            }
        }
    }).then((result) => {
        res.json({
            statusCode: 200, 
            message: 'Liste des Villages',
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

    VillageModel.findOne({
        include: {
            model: communeModel,
            include: {
                model: departementModel,
                include: {
                    model: regionModel,
                    include: contryModel
                }
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

    const { nomVillage } = req.body;

    VillageModel.update({ nomVillage }, { where: { id } }).then((result) => {
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

    VillageModel.destroy({
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

exports.allVillage = (req, res) => {

    let { matricule } = req.body;

    communeModel.findOne({
        nest: true,
        where: {
            code : matricule
        },
        include: VillageModel
    }).then((result) => {
        res.json({
            data : result , 
            message :'Liste des message d\'un commune',
            statusCode : 200
        })
    }).catch((err) => {
        res.json({
            data : err ,
            message : 'Erreur leur de ce listage',
            statusCode : 304
        })
    });

}