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

// Exemplo de uso
const meuCarro = new Carro("vermelho", "Fusca", "Volkswagen")
meuCarro.acelerar()
meuCarro.frear()
meuCarro.virar("direita")
