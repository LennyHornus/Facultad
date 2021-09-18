const fs = require('fs');
const helperClean = {
    fs : fs,
    pasaAJSON : function (array, nombreArchivo) {
        const arrayJSON = JSON.stringify(array, null, 2);
        const resultado = this.fs.writeFileSync('./'+nombreArchivo+'.JSON', arrayJSON);
        return 'salio bien'
    },
    pasaAArray : function (string) {
        const array = this.fs.readFileSync(string)
        const arrayJSON = JSON.parse(array);
        return arrayJSON;
    }
}

module.exports = helperClean;