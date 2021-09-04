const mime = require('mime');

const randomStrig = require('randomstring');

const path = require('path');

const fs = require('fs');

exports.base64 = base => {

    if (base === undefined) {
        return false;
    } else {
        // to declare some path to store your converted image
        const matches = base.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
            response = {};

            

        if (matches.length !== 3) {
            return new Error('Invalid input string');
        }

        response.type = matches[1];

        response.data = new Buffer(matches[2], 'base64');

        let decodedImg = response;



        let imageBuffer = decodedImg.data;

        let type = decodedImg.type;

        let extension = mime.getExtension(type);

        let fileName = randomStrig.generate({
            length: 12,
            charset: 'alphabetic'
        }) + '.' + extension;


        const pa = path.join(path.dirname(process.mainModule.filename), 'files/') + fileName;


        
        fs.writeFileSync(pa, imageBuffer, 'utf8');

        

        return fileName ;
        
    }

}