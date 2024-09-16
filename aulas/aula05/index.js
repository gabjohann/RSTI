/* // leitura de arquivos
const fs = require("fs")

const meuArquivo = "./cadastro.json"

function lerJSON(caminhoArquivo) {
  fs.readFile(caminhoArquivo, "utf-8", (erro, dados) => {
    if (erro) {
      console.error("Erro ao ler o arquivo", erro)
      return
    }

    try {
      // convertendo a string JSON para um objeto JS
      const dadosArquivoJson = JSON.parse(dados)

      console.log("Nome:", dadosArquivoJson.nome)

      console.log("Filho(s):")
      dadosArquivoJson.filhos.forEach((filho) => {
        console.log(
          `Nome: ${filho.nome}, Idade: ${filho.idade}, Espécie: ${filho.especie}`
        )
      })
    } catch (parseErro) {
      console.error("Erro ao processar o arquivo JSON", parseErro)
    }
  })
}

lerJSON(meuArquivo)
 */

// leitura de arquivos
const fs = require("fs")

const meuArquivo = "./cadastro.json"

function lerJSON(caminhoArquivo) {
  fs.readFile(caminhoArquivo, "utf-8", (erro, dados) => {
    if (erro) {
      console.error("Erro ao ler o arquivo", erro)
      return
    }

    try {
      // convertendo a string JSON para um objeto JS
      const dadosArquivoJson = JSON.parse(dados)

      console.log("Nome:", dadosArquivoJson.nome)
      console.log("Data Nascimento:", dadosArquivoJson.dataNascimento)

      console.log("Filho(s):")
      dadosArquivoJson.filhos.forEach(({ nome, especie }) => {
        console.log(`Nome: ${nome}, Espécie: ${especie}`)
      })
    } catch (parseErro) {
      console.error("Erro ao processar o arquivo JSON", parseErro)
    }
  })
}

lerJSON(meuArquivo)
