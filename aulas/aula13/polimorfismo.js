/* 
  Polimorfismo: podemos criar subclasses que estendem a classe Carro. 
  Cada uma dessas subclasses pode ter sua própria implementação de métodos, 
  como acelerar, frear ou virar. Isso demonstra como o mesmo método pode ter 
  comportamentos diferentes em classes diferentes.
*/

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

class CarroEsportivo extends Carro {
  acelerar() {
    console.log("O carro esportivo está acelerando rapidamente!")
  }

  frear() {
    console.log("O carro esportivo está freando com precisão.")
  }
}

class CarroFamilia extends Carro {
  acelerar() {
    console.log("O carro de família está acelerando de forma segura.")
  }

  frear() {
    console.log("O carro de família está freando suavemente.")
  }

  virar(direcao) {
    console.log(
      "O carro de família está virando para " + direcao + " com cuidado."
    )
  }
}

// Exemplo de uso
const meuCarroEsportivo = new CarroEsportivo("azul", "Ferrari", "Ferrari")
meuCarroEsportivo.acelerar()
meuCarroEsportivo.frear()
meuCarroEsportivo.virar("direita")

const meuCarroFamilia = new CarroFamilia("preto", "Voyage", "Volkswagen")
meuCarroFamilia.acelerar()
meuCarroFamilia.frear()
meuCarroFamilia.virar("esquerda")
