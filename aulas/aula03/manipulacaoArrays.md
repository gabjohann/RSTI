# Arrays

Os arrays são listas que não possuem tamanho nem elementos fixos.
Os arrays possuem propriedades e métodos. As propriedades de um array fornecem informações sobre o próprio array, já os métodos são funções que realizam operações no array.

Os arrays possuem índice (index) e posição. O índice é um número que representa a localização de um elemento dentro de um array, inicia sempre em 0. Já a posição refere-se à localização de um elemento em termos de ordem ou sequência.

Exemplo:

```
let array = [10, 20, 30, 40];

// o número 30 está na 3 posição e no índice 2
```

## Propriedade de Array

A propriedade mais utilizada é a **length**, que retorna o número de elementos do array (tamanho).

Exisetm outras como constructor, prototype, Symbol.iterator que não serão aprofundadas.

## Métodos de Array:

- push: adiciona um ou mais elementos ao final do array e retorna o comprimento do array

  ```
  let array = [1, 2, 3, 4, 5]

  console.log(array.push(6)) // 6
  console.log(array) // [1, 2, 3, 4, 5, 6]
  ```

- pop: remove o último elemento do array e o retorna

  ```
  let array = [1, 2, 3, 4, 5]

  console.log(array.pop()) // 5
  console.log(array) // [1, 2, 3, 4]
  ```

- shift: remove o primeiro elemento do array e o retorna

  ```
  let array = [1, 2, 3, 4, 5]

  console.log(array.shift(6)) // 1
  console.log(array) // [2, 3, 4, 5]
  ```

- unshift: adiciona um ou mais elementos ao início do array e retorna o comprimento do array

  ```
  let array = [1, 2, 3, 4, 5]

  console.log(array.unshift(0)) // 6
  console.log(array) // [0, 1, 2, 3, 4, 5]
  ```

- concat: une dois ou mais arrays e retorna um novo array

  ```
  let array = [1, 2, 3, 4, 5]
  let array2 = [6, 7, 8, 9]

  console.log(array.concat(array2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

- slice: cria um novo array com a parte específicada do original.

  ```
  let array = [1, 2, 3, 4, 5]
  let slicedArray = array.slice(2, 5)

  console.log(slicedArray) // [3, 4, 5]
  console.log(array) // [1, 2, 3, 4, 5]
  ```

- splice: remove ou substitui os elementos e/ou adicionando elementos novos

  ```
  let array = [1, 2, 3, 4, 5]

  console.log(array.splice(2, 2, 99, 100)) // 3, 4
  console.log(array) // [1, 2, 99, 100, 5]
  ```

- sort: ordena os elementos e retorna o array, pode receber uma função de comparação para definir esta ordem

  ```
  let unsortedArray = [5, 3, 8, 1, 2]

  console.log(unsortedArray.sort()) // [1, 2, 3, 5, 8]
  ```

Resumo:

- Índices: slice(), splice(), sort()

- Posições/Elementos: push(), pop(), shift(), unshift(), concat()
