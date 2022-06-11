// Criação da classe mãe:
class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
      this.agencia = agencia
      this.numero= numero
      this.tipo = tipo
      this.saldo = saldo
    }

    // Função de sacar
    sacar(valor){
        if (valor > this._saldo){
            console.log("Saldo insuficiente, o saque não pôde ser realizado.")
        } else if (valor < 0){
            console.log ("Valor invalido")
        }

        this._saldo = this._saldo - valor
        return this._saldo

    }

    // Função de depositar
    depositar(valor){
        if (valor <= 0){
            console.log("Valor inválido")
        } 

        this._saldo = this._saldo + valor
        return this._saldo

    }

    // Getters e Setters
    set saldo(valor) {
		this._saldo = valor
	}

	get saldo() {
		return this._saldo
	}
}

// Classe filha de conta corrente:
class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoDeCredito,valorCartao) {
		super(agencia, numero)
		this.tipo = 'corrente'
		this._cartaoDeredito = cartaoDeCredito
        this._valorCartao = valorCartao
	}

    compraEmCredito(valor){
        if (this._cartaoDeredito == false){
            return this._valorCartao = 0
        }

       return this._valorCartao = this._valorCartao + valor
    }

    // getters e setters da função de crédito
	set valorCartao(valor) {
        if(cartaoDeCredito == false){
            this._valorCartao = 0
        }
		this._valorCartao = valor
	}

	get valorCartao() {
		return this._valorCartao
	}
}

// Classe filha de congta poupança
class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero)
		this.tipo = 'poupança'
	}
}

// Classe filha de conta universitária
class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero)
		this.tipo = 'universitária'
	}

	sacar(valor) {
        // Impedimento no valor:
		if (valor > 500) {
			return 'A operacão foi negada devido ao valor.'
		}

		this._saldo = this._saldo - valor
		return this._saldo
	}
}

// Criação de variaveis com os objetos:
let minhaConta = new ContaCorrente (9, 10117,false,0)
let minhaContaPoupanca = new ContaPoupanca (9, 19117)
let minhaContaUniversitaria = new ContaUniversitaria (7, 20065)