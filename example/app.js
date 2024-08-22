function ContaBancaria(titular, saldo) {

  this.titular = titular;
  this.saldo = saldo;

  this.depositar = function (valor) {
    if (valor >= 0) {
      this.saldo += valor
    }
    else{
      console.log ('nao é possivel adicionaar um valor negativo')
    }
  },

    this.retirar = function (valor) {
      if (valor > 0) {
        if (saldo > valor){
          this.saldo -= valor
        } else{
          console.log('saldo insuficiente') 
        }
      }
    },

    this.consultarSaldo = function () {
      console.log(`O saldo de ${this.titular} é RS ${this.saldo.toFixed(2)}`)
    }
};

const AnaClara = new ContaBancaria('Ana Clara', 2500)

AnaClara.depositar(-700)
AnaClara.consultarSaldo()
//AnaClara.retirar (6000)
//AnaClara.consultarSaldo()
