function ContaBancaria(titular, saldo) {

  this.titular = titular;
  this.saldo = saldo;

  this.depositar = function (valor) {
    if (valor > 0) {
      this.saldo += valor
    }
  },

    this.retirar = function (valor) { },

    this.consultarSaldo = function () {
      console.log(`O saldo de ${this.titular} é RS${this.saldo.toFixed(2)}`)
    }
};

const AnaClara = new ContaBancaria('Ana Clara', 2500)

AnaClara.depositar(700)
AnaClara.consultarSaldo()