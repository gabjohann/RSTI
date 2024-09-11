/* 
5. Faça um programa que leia as duas notas de um aluno em uma 
matéria e mostre na tela a sua média na disciplina.
*/

const readline = require('readline'); 

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Bem-vindo aluno!')
interface.question('Informe sua primeira nota: ', (nota1) => {
    interface.question('Informe sua segunda nota: ', (nota2) => {
        let media = (parseInt(nota1) + parseInt(nota2))/2
        console.log(media)
        interface.close();
    })
}) 

/* 
6. Faça um programa que leia um número inteiro e mostre o 
seu antecessor e seu sucessor.
*/
interface.question('Informe um número inteiro: ', (num) => {
    let antecessor = parseInt(num) - 1
    let sucessor = parseInt(num) + 1

    console.log(`O antecessor de ${num} é ${antecessor} e o seu sucessor é ${sucessor}.`)

    interface.close()
})