/* 
1. Crie uma função que adiciona um elemento ao final de um array
*/

let array = [1, 2, 3] // declaração de um array inical

const adicionaInicio = (valor) => {
    array.push(valor) // adiciona o valor informado ao final do array
    console.log(array)
}

// execução da função
//adicionaInicio(14)

/* 2. Crie uma função que remove o primeiro elemento de um array */
const removeInicio = () => {
    array.shift()
    console.log(array)
}

removeInicio()