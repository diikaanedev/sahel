const commercialistionModel = require('../models/commercialisation');

const recolteChampsModel = require('../models/recolte-champs');

const operateurStockerModel = require('../models/operateur-stocker');

const cultureModel = require('../models/culture');

const agriculteurModel = require('../models/agriculture');

const membreModel = require('../models/membre');

exports.add = (req, res) => {
    let { curcuit, matricule_operateur, masse_produit, prix, date_payement, numero_quitance, code_recolte } = req.body;

    operateurStockerModel.findOne({
        raw: true,
        where: {
            matricule: matricule_operateur
        }
    }).then((operateur) => {
        recolteChampsModel.findOne({
            raw: true,
            where: {
                code_recolte
            }
        }).then((recolte) => {
            if (parseInt(masse_produit) > parseInt(recolte.masse_recolte)) {
                res.json({
                    data: [],
                    message: 'masse produit acheter superieur a celle recolte',
                    statusCode: 304
                })
            } else {
                commercialistionModel.create({
                    curcuit, date_payement, numero_quitance,
                    recolteChampId: recolte.id, operateurStockerId: operateur.id, prix
                }).then((commerce) => {
                    res.json({
                        data: commerce,
                        message: 'Insertion Réussi',
                        statusCode: 200
                    })
                }).catch((err) => {
                    res.json({
                        data: err,
                        message: 'Err ! ',
                        statusCode: 304
                    })
                });
            }
        }).catch((err) => {
            res.json({
                data: err,
                message: 'Err ! ',
                statusCode: 304
            })
        });
    }).catch((err) => {
        res.json({
            data: err,
            message: 'Err ! ',
            statusCode: 304
        })
    });
}

exports.all = (req, res) => {
    let recol = [];
    commercialistionModel.findAll({
        nest: true,
    }).then((commerce) => {
        res.json(commerce)
    }).catch((err) => {
        res.json({
            data: err,
            message: 'Err ! ',
            statusCode: 304
        })
    });
}

exports.etatGeneralVenteProduit = (req, res) => {

    let { produit } = req.body;

    cultureModel.findOne({
        raw: true,
        where: {
            id: produit
        }
    }).then(async (culture) => {
        let commerces = [];
        let recolte = [];
        let opStockers = [];
        let agriculteurs = [];
        await recolteChampsModel.findAll({
            raw: true,
            where: {
                cultureId: culture.id
            }
        }).then(async (recoltes) => {
            recolte = recoltes;
            //get Commerce
            for (let index = 0; index < recoltes.length; index++) {
                const element = recoltes[index];

                await commercialistionModel.findOne({
                    raw: true,
                    where: {
                        recolteChampId: element.id
                    }
                }).then((commerce) => {
                    commerces.push(commerce);
                })
            }
        });
        //get Agriculteurs
        for (let index = 0; index < recolte.length; index++) {
            const element = recolte[index];
            console.log(element);
            await agriculteurModel.findOne({
                nest: true,
                where: {
                    id: element.agricultureId , 
                },
                include : [
                    {
                        model : membreModel
                    }
                ]
            }).then(agriculteur => {
                agriculteurs.push(agriculteur);
            })
            
        }
        //get Opérateur Stockers
        for (let index = 0; index < commerces.length; index++) {
            const el = commerces[index];
            await operateurStockerModel.findOne({
                raw: true,
                where: {
                    id: el.operateurStockerId
                }
            }).then((opStoker) => {
                opStockers.push(opStoker);
            })
        }

        res.json({ culture, commerces, recolte, opStockers, agriculteurs })
    }).catch((err) => {
        res.json(err)
    });

}

exports.etatGeneralVenteCircuit = (req, res) => {

    let { circuit } = req.body;

    commercialistionModel.findAll({
        raw: true,
        where: {
            curcuit: circuit
        },
    }).then(async (commerce) => {
        let datas = [];
        let retcoltes = [];
        let operateurs = [];
        let cultures = [];
        let agriculteurs = [];
        //get Operateur , Recoltes 
        for (let index = 0; index < commerce.length; index++) {
            const element = commerce[index];

            await recolteChampsModel.findOne({
                raw: true,
                where: {
                    id: element.recolteChampId
                }
            }).then((ret) => {
                retcoltes.push(ret);
            });
            await operateurStockerModel.findOne({
                raw: true,
                where: {
                    id: element.operateurStockerId
                }
            }).then((op) => {
                operateurs.push(op);
            });
        }
        //get Culture
        for (let index = 0; index < retcoltes.length; index++) {
            const el = retcoltes[index];
            await cultureModel.findOne({
                raw: true,
                where: {
                    id: el.cultureId
                }
            }).then(culture => {
                cultures.push(culture);
            })

        }
        for (let index = 0; index < retcoltes.length; index++) {
            const el = retcoltes[index];
            await agriculteurModel.findOne({
                nest: true,
                where: {
                    id: el.agricultureId
                },
                include: [
                    {
                        model: membreModel
                    }
                ]
            }).then(agriculteur => {
                agriculteurs.push(agriculteur);
            })
        }

        res.json({ commerce, retcoltes, operateurs, cultures, agriculteurs })
    }).catch((errCommerce) => {
        res.json(errCommerce)
    });
}