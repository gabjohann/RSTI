/* 
Faça um programa que leia o nome do funcionário e seu salário 
e mostre uma mensagem como a do exemplo: 
O funcionário Lucas recebe R$2000,00 por mês.
*/

const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interface.question('Informe seu nome: ', (nome) => {
    interface.question('Informe seu salário: ', (salario) => {
        console.log(`O ${nome} recebe R$${salario} por mês.`)
    
        interface.close()
    })
})