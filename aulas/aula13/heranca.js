class Carro {
  constructor(cor, modelo, marca) {
    this.cor = cor
    this.modelo = modelo
    this.marca = marca
  }

  acelerar() {
    console.log("O carro está acelerando.")
  }

  frear() {
    console.log("O carro está freando.")
  }

  virar(direcao) {
    console.log("O carro está virando para " + direcao + ".")
  }
}

// Classe filha herdando a classe pai - Carro
class CarroEsportivo extends Carro {
  constructor(cor, modelo, marca, potencia) {
    super(cor, modelo, marca) // chama o construtor da classe pai
    this.potencia = potencia
  }

  acelerar() {
    console.log("O carro esportivo está acelerando rapidamente!")
  }

  mostrarPotencia() {
    console.log(`O carro esportivo tem ${this.potencia} de potência!`)
  }
}

// Exemplo de uso
const meuCarroEsportivo = new CarroEsportivo(
  "vermelho",
  "Ferrari 296",
  "Ferrari",
  "500HP"
)
meuCarroEsportivo.acelerar()
meuCarroEsportivo.frear()
meuCarroEsportivo.virar("esquerda")
meuCarroEsportivo.mostrarPotencia()
