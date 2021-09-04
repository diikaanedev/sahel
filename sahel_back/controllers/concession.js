const concessionModel = require('../models/concession');

const villageModel = require('../models/village');


exports.add = (req, res) => {



    concessionModel.create(req.body).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Insertion réussi',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 200,
            message: 'Erreur Insertion ',
            data: err
        });
    });

}

exports.all = (req, res) => {
    concessionModel.findAll({
        raw: true,
        include: villageModel
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Liste des Conséssion',
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

exports.allConcessionByVillage = (req, res) => {

    let { matricule } = req.body;

    villageModel.findOne({
        nest: true,
        include: concessionModel,
        where: {
            code: matricule
        }
    }).then(result => {
        res.json({
            message: 'Liste des Concession d\'un Village',
            data: result,
            statusCode: 200
        })
    }).catch(err => {
        res.json({
            data: err,
            statusCode: 304,
            message: 'Erreur !!!'
        })
    })

}

exports.one = (req, res) => {
    const { id } = req.params;

    concessionModel.findOne({
        raw: true,
        include: villageModel,
        where: {
            id
        }
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Affichage Success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur Affichage',
            data: err
        });
    });
}

exports.upadte = (req, res) => {
    const { id } = req.params;

    concessionModel.update({

    }, { where: { id } }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Modification success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statsuCode: 304,
            message: 'Erreur Modification',
            data: err
        });
    });
}

exports.delete = (req, res) => {
    concessionModel.destroy({
        where: { id: req.parms.id }
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'Suppréssion Avec Success',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur Supreesiion',
            data: err
        });
    });
}

exports.allConcessionWithFontaine = (req, res) => {
    concessionModel.findAll({
        nest: true,
        where: {
            approvisEau: 'ROBINET'
        }
    }).then((result) => {
        res.json({
            message: 'Liste des Concession avec Fontaine',
            data: result,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            data: err,
            message: 'Erreur !',
            statusCode: 304
        })
    });
}
exports.allConcessionWithElectrik = (req, res) => {
    concessionModel.findAll({
        nest: true,
        where: {
            sourceEnergie: 'ELECTRICITE'
        }
    }).then((result) => {
        res.json({
            message: 'Liste des Concession avec ELECTRICITE',
            data: result,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            data: err,
            message: 'Erreur !',
            statusCode: 304
        })
    });
}

