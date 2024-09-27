/* 
  Propriedades privadas: 
   As propriedades #cor, #modelo e #marca são privadas, ou seja, 
   não podem ser acessadas diretamente fora da classe.
  Métodos públicos: Usamos métodos como getCor, setCor, getModelo, etc., 
   para permitir o acesso controlado a essas propriedades. Isso garante que 
   possamos validar ou modificar os dados conforme necessário antes de 
   permitir que sejam alterados.
  Proteção de dados: O encapsulamento ajuda a proteger os dados da classe, 
   evitando acesso não autorizado e garantindo que as operações sobre esses 
   dados sejam realizadas de forma controlada.
  Dessa forma, o encapsulamento aumenta a segurança e a manutenibilidade do 
   código. 
*/

class Carro {
  #cor // Propriedade privada
  #modelo // Propriedade privada
  #marca // Propriedade privada

  constructor(cor, modelo, marca) {
    this.#cor = cor
    this.#modelo = modelo
    this.#marca = marca
  }

  // Métodos públicos para acessar propriedades privadas
  getCor() {
    return this.#cor
  }

  setCor(cor) {
    this.#cor = cor
  }

  getModelo() {
    return this.#modelo
  }

  setModelo(modelo) {
    this.#modelo = modelo
  }

  getMarca() {
    return this.#marca
  }

  setMarca(marca) {
    this.#marca = marca
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

// Acessando propriedades através de métodos públicos
console.log(meuCarro.getCor())
meuCarro.setCor("azul")
console.log(meuCarro.getCor())

console.log(meuCarro.getModelo())
meuCarro.setModelo("Gol")
console.log(meuCarro.getModelo())

meuCarro.acelerar()
