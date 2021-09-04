const pretModel = require('../models/pret');

const structureFinanciereModel = require('../models/structure-financiere');

const membreModel = require('../models/membre');

exports.add = (req, res) => {


    let { matricule_membre, matricule_structure_financiere } = req.body;

    membreModel.findOne({
        raw: true,
        where: {
            matricule: matricule_membre
        }
    }).then((membre) => {

        req.body.membreId = membre.id;


        structureFinanciereModel.findOne({
            raw: true,
            where: {
                matricule: matricule_structure_financiere
            }
        }).then((structureFinanciere) => {

            req.body.structureFinanciereId = structureFinanciere.id;

            pretModel.create(req.body).then((pret) => {
                res.json({
                    data: pret,
                    message: 'Insertion Réussi',
                    statusCode: 200
                })
            }).catch((errPret) => {
                res.json({
                    data: errPret,
                    message: 'Err Pret',
                    statusCode: 304
                })
            });

        }).catch((errStructureFinanciere) => {
            res.json({
                data: errStructureFinanciere,
                message: 'Err Structure Financiere',
                statusCode: 304
            })
        });
    }).catch((errMembre) => {
        res.json({
            data: errMembre,
            message: 'Err Membre',
            statusCode: 304
        })
    });
}

exports.all = (req, res) => {

    pretModel.findAll({
        raw: true,
    }).then(async (prets) => {

        let membres = [];
        let structures = [];

        for (let index = 0; index < prets.length; index++) {
            const element = prets[index];

            await membreModel.findOne({
                raw: true,
                where: {
                    id: element.membreId
                }
            }).then(membre => {
                membres.push(membre);
            });

            await structureFinanciereModel.findOne({
                raw: true,
                where: {
                    id: element.structureFinanciereId
                }
            }).then(structure => {
                structures.push(structure);
            });
        }


        res.json({ prets, structures, membres })

    }).catch((errPret) => {
        res.json({
            message: 'Err Listage Pret',
            data: errPret,
            statusCode: 304
        })
    });

}

exports.membre = (req, res) => {


    let { matricule } = req.body;

    membreModel.findOne({
        raw : true , 
        where : {
            matricule
        }
    }).then((membre) => {

        pretModel.findAll({
            raw : true , 
            where : {
                membreId : membre.id
            }
        }).then(async (prets) => {

            let structures = [];

            for (let index = 0; index < prets.length; index++) {
                const element = prets[index];

                await structureFinanciereModel.findOne({
                    raw: true,
                    where: {
                        id: element.structureFinanciereId
                    }
                }).then(structure => {
                    structures.push(structure);
                });
            }

            res.json({structures , membre , prets});
            
        }).catch((errPrets) => {
            res.json({
                data : errPrets , 
                message : 'Err Pret NOT FOUND',
                statusCode : 304
            })
        });
        
    }).catch((errMembre) => {
        res.json({
            data : errMembre , 
            message : 'Err Membre NOT FOUND',
            statusCode : 304
        })
    });

}

exports.structure = (req, res) => {

    let { matricule } = req.body;

    structureFinanciereModel.findOne({
        raw: true,
        where: {
            matricule
        }
    }).then((structure) => {

        pretModel.findAll({
            raw: true,
            where: {
                structureFinanciereId: structure.id
            }
        }).then(async (prets) => {
            let membres = [];

            for (let index = 0; index < prets.length; index++) {
                const element = prets[index];

                await membreModel.findOne({
                    raw: true,
                    where: {
                        id: element.membreId
                    }
                }).then(membre => {
                    membres.push(membre);
                });

            }


            res.json({ prets, membres, structure })

        }).catch((errPret) => {
            res.json({
                data: errPret,
                message: 'Erreur Listage !!',
                statusCode: 304
            })
        });
    }).catch((structureErr) => {
        res.json({
            data: structureErr,
            message: 'Erreur Structure Financiere not found',
            statusCode: 304
        })
    });

}