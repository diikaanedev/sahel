
const membreModel = require('../models/membre');

const villageModel = require('../models/village');

const membreAgriculte = require('../models/membreAgriculture');

const agricultureModel = require('../models/agriculture');

const cultureModel = require('../models/culture');


const base64 = require('../utils/base64');

exports.add = (req, res) => {
    const { url_photo } = req.body;

    const filename = base64.base64(url_photo);


    if (!url_photo) {
        return res.json({
            message: 'Erreur au niveau de l\'image',
            statusCode: 304,
            status: 'NOT OK',
            data: null
        });
    }

    req.body.url_photo = filename;

    membreModel.create(req.body).then((result) => {
        res.json({
            message: 'Insertion réussi avec Success',
            data: result,
            statusCode: 200
        });
    }).catch((err) => {
        res.json({
            message: 'Erreur Insertion',
            data: err,
            statusCode: 304
        });
    });

}
exports.all = (req, res) => {

    membreModel.findAll({
        raw: true,
    }).then((result) => {
        res.json({
            message: 'Liste des Membres',
            data: result,
            statusCode: 200
        });
    }).catch((err) => {
        res.json({
            message: 'Erreur Listages',
            data: err,
            statusCode: 304
        });
    });

}

exports.one = (req, res) => {

}
exports.update = (req, res) => {

}
exports.delete = (req, res) => {

}

exports.memberChamps = (req, res) => {

    let { matricule } = req.body;

    agricultureModel.findAll({
        raw: true,
        include: [
            {
            model: membreModel,
            where : {
                matricule
            },
            required: true,
          } , 

          {
              model : cultureModel
          }
    ],
          nest:true
    }).then((result) => {
        console.log(result);
        
        res.json({
            message: 'Liste des Champs de ce Membres',
            data: result,
            statusCode: 200
        });
    }).catch((err) => {
        res.json({
            data: err,
            message: 'Erreor',
            statusCode: 304
        })
    });

}