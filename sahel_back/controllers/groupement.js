const groupementModel = require('../models/groupement');

const membreGroupementModel = require('../models/membreGroupement');

const membreModel = require('../models/membre');

const villageModel = require('../models/village');

const agricultureModel = require('../models/agriculture');

const contryModel = require('./contry');

exports.add = (req, res) => {


    const { villageId } = req.body;


    villageModel.findOne({
        raw: true,
        where: {
            id: villageId
        }
    }).then(result => { 
        
        groupementModel.create(req.body).then((result) => {
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

    return groupementModel.findAll({
        nest: true,
        include: membreModel
    }).then((result) => {
        res.json({
            statusCode: 200,
            message: 'LIstes des Groupements',
            data: result
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            message: 'Erreur LIstage',
            data: err
        });
    });

}

exports.one = (req, res) => {


}

exports.update = (req, res) => {



}

exports.delete = (req, res) => {


}

exports.listeChampsMember = (req, res) => {


    let { matricule } = req.body;

    groupementModel.findOne({
        nest: true,
        where: {
            id: matricule
        },
        include: [{
            model: membreModel,
            include: {
                model: agricultureModel
            }
        }]
    }).then((result) => {

        res.json({
            message: 'Liste des Champs de ce Groupements',
            data: result,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: 'Erreur Listage',
            data: err,
            statusCode: 304
        });
    });

}
exports.listeMember = (req, res) => {


    let { matricule } = req.body;

    groupementModel.findOne({
        nest: true,
        where: {
            id: matricule
        },
        include: [{
            model: membreModel,
        }]
    }).then((result) => {

        res.json({
            message: 'Liste des Membres de ce Groupements',
            data: result,
            statusCode: 200
        })
    }).catch((err) => {
        res.json({
            message: 'Erreur Listage',
            data: err,
            statusCode: 304
        });
    });

}

exports.addMember = (req, res) => {
    let { matriculeMember, matriculeRegroupement } = req.body;

    groupementModel.findOne({
        raw: true,
        where: {
            id: matriculeRegroupement
        }
    }).then((result) => {
        membreModel.findOne({
            raw: true,
            where: {
                matricule: matriculeMember
            }
        }).then((result1) => {
            membreGroupementModel.create({
                groupementId: result.id,
                membreId: result1.id
            }).then((result2) => {
                res.json({
                    data: result2,
                    message: 'insertion réussi',
                    statusCode: 200
                })
            }).catch((err) => {
                res.json({
                    data: err,
                    message: 'err ',
                    statusCode: 304
                })
            });
        }).catch((err) => {
            res.json({
                data: err,
                message: 'err ',
                statusCode: 304
            })
        });
    }).catch((err) => {
        res.json({
            data: err,
            message: 'err ',
            statusCode: 304
        })
    });

}