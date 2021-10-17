const esp = nombre => `hola ${nombre}, ¿cómo estás hoy?`;
const eng = nombre => `hi ${nombre}, how are you today?`;
const br = nombre => `oi ${nombre}, como você está hoje?`;
const ger = nombre => `Hallo ${nombre}, wie geht es dir heute?`; 

const saludar = (nombre, callback) => console.log(callback(nombre));

saludar('lenny', ger)