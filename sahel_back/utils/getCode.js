const contry = require('../models/contry');

exports.getCodeContry = async id => {
    contry.findOne({ where:{id:1} })
          .then( result=> {
              console.log(result);
              
            return result;
          })
}