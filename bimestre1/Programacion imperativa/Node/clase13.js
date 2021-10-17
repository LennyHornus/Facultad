//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
];

// podes continuar tu codigo a partir de aca!

const banco = {
    clientes : arrayCuentas,
    consultarCliente: function (nombre) {
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente.titularCuenta === nombre) {
                return cliente
            }
        }
    },
    deposito: function (titularCuenta, dinero) {
        let dineroDepositado
        for (let i = 0; i < this.clientes.length; i++) {
            let cliente = this.clientes[i];
            if (cliente.titularCuenta === titularCuenta) {
                dineroDepositado += dinero
                cliente.saldoEnPesos.replace()
            }
        }
    },
    meterGuita: function (titular, dinero) {
        let titularCuenta = this.consultarCliente(titular)
        NO SE COMO SEGUIR LRPM
    }
}
let depositoTest = banco.deposito('Ramon Connell', 25)
console.log(depositoTest);
let clienteEncontrado =  banco.consultarCliente('Ramon Connell');
console.log(clienteEncontrado);


/// JUANMA TRY---------------------------------------------------------------------------------------------------------------------
const banco = {
    clientes : arrayCuentas,
    consultarCliente : function (nombre) {
        for (let i = 0; i < this.clientes.length; i++) {
            if(nombre === this.clientes[i].titularCuenta){
              return this.clientes[i];
            }
        }
    },
    deposito: function (titular,cantDinero) {
      for (let i = 0; i < this.clientes.length; i++) {
          if(titular === this.clientes[i].titularCuenta){
            this.clientes[i].saldoEnPesos += cantDinero;
            return Depósito realizado, su nuevo saldo, su nuevo saldo es: ${this.clientes[i].saldoEnPesos}
          }
      }
    },
    extraccion : function (titular,cantDinero) {
      let result = 0;
      for (let i = 0; i < this.clientes.length; i++) {
          if(titular === this.clientes[i].titularCuenta){
            result = this.clientes[i].saldoEnPesos - cantDinero;
            if(result < 0){
              return "Fondos insuficientes";
            }else{
              this.clientes[i].saldoEnPesos -= cantDinero;
              return Extraccion realizada correctamente, su nuevo saldo es: ${this.clientes[i].saldoEnPesos};
            }
          }
      }
    }
}