const cultureModel = require('../models/culture');

const agricultureModel = require('../models/agriculture');

const cultureAgricol = require('../models/culture-agriculture');

const membreModel = require('../models/membre');

exports.add = (req, res) => {

    let { nom } = req.body;

    cultureModel.create({ nomCulture: nom }).then((result) => {
        res.json({
            statusCode: 200,
            data: result,
            message: 'Insertion réussi'
        });
    }).catch((err) => {
        res.json({
            statusCode: 304,
            data: err,
            message: 'Erreur d\'Insertion'
        })
    });

}

exports.all = (req, res) => {
    cultureModel.findAll({
        raw: true
    }).then((result) => {
        res.json({
            statusCode: 200,
            data: result,
            message: 'Listage Successs'
        })
    }).catch((err) => {
        res.json({
            statusCode: 304,
            data: err,
            message: 'Erreur Listage'
        })
    });
}

exports.addCultureChamps = (req, res) => {

    let { cultureId, matriculeAgriculre, surface } = req.body;
    

    agricultureModel.findOne({
        raw: true,
        where: {
            matricule: matriculeAgriculre
        }
    }).then((result) => {
        let c = 0 ;
        let st = parseInt(result.surface_total);
        cultureAgricol.findAll({
            raw : true , 
            where : {
                agricultureId : result.id
            }
        }).then(result1 => {
            result1.forEach(element => {
                
                c += parseInt(element.surface_cultive);
            });
            let sc = c + parseInt(surface); 
            let sj = st - sc ;
            
            if(sj >= 0) {
                agricultureModel.update({
                    surface_cultive : sc , 
                    surface_mise_en_jachere : sj
                } , {where : {
                    matricule : matriculeAgriculre
                }}).then(result2 => {

                    cultureAgricol.create({
                        cultureId : cultureId , 
                        agricultureId : result.id , 
                        surface_cultive : surface
                    }).then(result3 => {
                        res.json({
                            message :'Updated Succesfully',
                            data : result3 , 
                            statusCode : 200
                        })
                    }).catch(err => {
                        res.json({
                            data : err , 
                            message : 'New Err'
                        })
                    })
                })
            }else {
                res.json({
                    message : 'Erreur Saisis Champs Cultive supérieur à champs total',
                    statusCode : 304
                })
            }
        })
        
    }).catch((err) => {
        res.json({
            data: err,
            message: 'Champs not Found',
            statusCode: 304
        })
    });

}