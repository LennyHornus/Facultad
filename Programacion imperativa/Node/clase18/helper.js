const fs = require('fs');
const helper = {
    fs : fs,
    pasaAJSON : function (array, nombreArchivo) {
        const arrayJSON = JSON.stringify(array, null, 2);
        const resultado = this.fs.writeFileSync('./'+nombreArchivo+'.JSON', arrayJSON);
        return 'salio bien'
    },
    pasaAArray : function (string) {
        const array = this.fs.readFileSync(string, 'utf-8')
        const arrayJSON = JSON.parse(array);
        return arrayJSON;
    }
}

const arrayTest = ['hola', 'que', 'tal'];
const prueba = helper.pasaAJSON(arrayTest, 'arrayTest');
console.log(prueba);
const prueba2 = helper.pasaAArray('./arrayTest.JSON');
console.log(prueba2);


module.exports = helper;