const fs = require('fs');
let texto = fs.readFileSync("./archivo.txt","utf8")

console.log(texto);

texto += ' imperativa';

console.log(texto);

fs.writeFileSync('./archivo.txt', texto);

