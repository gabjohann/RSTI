const readline = require('readline'); // importa o módulo readline

// Cria uma interface de leitura para a entrada padrão e a saída padrão
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pede que o usuáro digite seu nome e captura a resposta
rl.question('Escreva seu nome: ', (nome) => {
  console.log(`Olá, ${nome}!`); // Mostra uma saudação com o nome informado
  
  // Fecha a interface de leitura após a resposta
  rl.close();
})