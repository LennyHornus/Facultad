const fs = require('fs');
const helperClean = {
    fs : fs,
    pasaAJSON : function (array, nombreArchivo) {
        const arrayJSON = JSON.stringify(array, null, 2);
        this.fs.writeFileSync( __dirname + '/'+nombreArchivo+'.JSON', arrayJSON);
    },
    pasaAArray : function (nombreArchivo) {
        const array = this.fs.readFileSync(__dirname + '/' + nombreArchivo + '.json', 'utf-8')
        const arrayJSON = JSON.parse(array);
        return arrayJSON;
    }
}

module.exports = helperClean;