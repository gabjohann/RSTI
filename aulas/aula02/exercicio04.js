/* 
    Desenvolva um algoritmo que leia dois números inteiros e 
    mostre o somatório entre eles.
*/

const readline = require('readline')

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interface.question('Informe o primeiro número: ', (num1) => {
    interface.question('Informe o segundo número: ', (num2) => {
        console.log(`O somatório dos valores é: ${parseInt(num1) + parseInt(num2)}`)
    
        interface.close()
    }) 
})