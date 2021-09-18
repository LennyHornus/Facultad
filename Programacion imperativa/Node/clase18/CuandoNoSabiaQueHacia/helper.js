const fs = require('fs');
const profesionalesJSON = fs.readFileSync('./profesionales.JSON', 'utf8');
console.log(profesionalesJSON);
const profesionales = JSON.parse(profesionalesJSON);
console.log(profesionales);


// const JSON = JSON.stringify(profesionales, null, 2);
// fs.writeFileSync('./profesionales.JSON', JSON);