const jsonHelper = require('./lecturaEscritura');

// 1
const carrera = {
    // A
    autos : jsonHelper.leerJson('autos'),

    //B
    autosPorTanda : 6,
    
    //C
    autosHabilitados : function () {
        return this.autos.filter(auto => !auto.sancionado)
    },
    autosHabilitados2 : function () {
        const habilitados = [];
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.sancionado === false) {
                habilitados.push(auto)
            }
        }
        return habilitados
    },

    // D
    listarAutos : function (autos) {
        autos.forEach(auto => {
            console.log(`Piloto: ${auto.piloto}, Patente: ${auto.patente}, Velocidad: ${auto.velocidad}, Peso en kg: ${auto.peso}, Estado: ${auto.sancionado ? 'sancionado' : 'habilitado'}`);
        });
    },

    // E
    buscarPorPatente : function (patente) {
        return this.autos.find(auto => auto.patente === patente);
    },

    // F
    filtrarPorCilindrada : function (numCilindrada) {
        const habilitados = this.autosHabilitados(this.autos)
        return habilitados.filter(auto => auto.cilindrada <= numCilindrada)
    },

    // G
    ordenarPorVelocidad : function () {
        return this.autos.sort((a,b) => a.velocidad - b.velocidad);
    },

    // H
    habilitarVehiculo : function (patente) {
        const auto = this.buscarPorPatente(patente)
        if (auto) {
            auto.sancionado = false;
            jsonHelper.escribirJson('autos', this.autos);
        }
    },

    // I
    generarTanda : function (peso, cilindrada) {
        const autos = this.filtrarPorCilindrada(cilindrada).filter(auto => auto.peso <= peso)
        return autos.slice(0, this.autosPorTanda);
    },

    // J
    pesoPromedio : function (peso, cilindrada) {
        const autos = this.generarTanda(peso, cilindrada);
        const promedio = autos.reduce((acum, auto) => acum + auto.peso,0) / autos.length;
        return `El peso promedio de los autos es : ${promedio.toFixed(0)}`;
    },

    // K
    listarPodio : function (autos) {
        const podio = autos.sort((a, b) => b.puntaje - a.puntaje);
        console.log(`El ganador es: ${podio[0].piloto}, con un puntaje de: ${podio[0].puntaje}\nEl segundo puesto es para: ${podio[1].piloto}, con un puntaje de: ${podio[1].puntaje}\nEl tercer puesto es para: ${podio[2].piloto}, con un puntaje de: ${podio[2].puntaje}`);
    }
};

// C
console.log('\n'+'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
carrera.listarAutos(carrera.autos);
// D
console.log('\n'+'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
carrera.listarAutos(carrera.autosHabilitados());
// E
console.log('\n'+'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
console.log(carrera.buscarPorPatente('MMN771'));
// F
console.log('\n'+'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
carrera.listarAutos(carrera.filtrarPorCilindrada(1500));
// G
console.log('\n'+'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
carrera.listarAutos(carrera.ordenarPorVelocidad());
// H
console.log('\n'+'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
carrera.habilitarVehiculo('J23');
// I
console.log('\n'+'IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
carrera.listarAutos(carrera.generarTanda(2000, 1500));
// J 
console.log('\n'+'JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ');
console.log(carrera.pesoPromedio(2000,1500));
// K
console.log('\n'+'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
carrera.listarPodio(carrera.generarTanda(2000,1500));