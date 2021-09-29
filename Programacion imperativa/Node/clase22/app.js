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
        return this.autos.filter(auto => auto.patente === patente);
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
        if (auto != undefined) {
            auto.sancionado = false;
            this.listarAutos(this.autos);
            TERMINALO VAGO
        }
        const modificacion = auto.sancionado = false

        return modificacion
    },
    habilitarVehiculo2: function (patente) {
        const auto = this.buscarPorPatente(patente)
        if(auto !== undefined ){
            auto.sancionado = false;
            this.listarAutos(this.autos);
            objHelper.escribirJson("autos",this.autos)
            return auto
        }
    },
};

// C
console.log('\n'+'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
carrera.listarAutos(carrera.autos);
// D
console.log('\n'+'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD');
carrera.listarAutos(carrera.autosHabilitados());
// E
console.log('\n'+'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
carrera.listarAutos(carrera.buscarPorPatente('MMN771'));
// F
console.log('\n'+'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
carrera.listarAutos(carrera.filtrarPorCilindrada(1500));
// G
console.log('\n'+'GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG');
carrera.listarAutos(carrera.ordenarPorVelocidad());
// H
console.log('\n'+'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');

