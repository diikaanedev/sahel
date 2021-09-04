const recolteChamps = require('../models/recolte-champs');

const agricultureModel = require('../models/agriculture');

const cultureAgricole = require('../models/culture-agriculture');

exports.add = (req, res) => {
    let { surface_recolte, cultureId, matricule } = req.body;

    agricultureModel.findOne({
        raw: true,
        where: {
            matricule
        }
    }).then((champs) => {

        cultureAgricole.findOne({
            raw: true,
            where: {
                cultureId,
                agricultureId: champs.id
            }
        }).then((culte) => {

            if (parseInt(culte.surface_cultive) === parseInt(surface_recolte)) {

                cultureAgricole.destroy({
                    where: {
                        cultureId,
                        agricultureId: champs.id
                    }
                }).then((culteDestroy) => {
                    let newSC = parseInt(culte.surface_cultive) - parseInt(surface_recolte) ; 
                    let newSMJ = parseInt(culte.surface_cultive) + parseInt(surface_recolte) ; 
                    agricultureModel.update({
                        surface_cultive : newSC , 
                        surface_mise_en_jachere : newSMJ
                    } ,{
                        where : {
                            id : champs.id
                        }
                    }).then((champsUpdate) => {
                        req.body.agricultureId = champs.id;
                        recolteChamps.create(req.body).then((recolte) => {
                            res.json({
                                message : 'Insertion successfuly' , 
                                data : recolte , 
                                statusCode : 200
                            })
                        }).catch((errRecolte) => {
                            res.json({
                                message: 'Erreur errRecolte',
                                data: errRecolte,
                                statusCode: 304
                            })
                        });
                        
                    }).catch((errChampsUpdate) => {
                        res.json({
                            message: 'Erreur errChampsUpdate',
                            data: errChampsUpdate,
                            statusCode: 304
                        })
                    });     
                }).catch((errCulteDestroy) => {
                    res.json({
                        message: 'Erreur errCulteDestroy',
                        data: errCulteDestroy,
                        statusCode: 304
                    })
                });

            } else {
                res.json({
                    message: 'Erreur Récolte',
                    data: [],
                    statusCode: 304
                })
            }


        }).catch((errCulte) => {
            res.json({
                message: 'Erreur errCulte',
                data: errCulte,
                statusCode: 304
            })
        });
    }).catch((errChamps) => {
        res.json({
            message: 'Erreur errChamps',
            data: errChamps,
            statusCode: 304
        })
    });


}
