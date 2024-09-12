# Resumo de estrutas de repetição e condicionais

**Iteração**: se refere ao processo de percorrer todos os itens de uma array ou objeto e realizar determinada ação em cada item.

## Estruturas de Repetição

- for:
Um loop genérico que permite controlar o número de iterações com um índice. Utilizado quando você sabe de antemão quantas vezes deseja iterar.

  exemplo:
  ```
  for (let i = 0; i < 5; i++) {
      console.log(i); 
  }
  ````


- for...in:
Itera sobre as propriedades enumeráveis de um objeto.
Utiliza-se quando se deseja iterar sobre as chaves de um objeto.

  exemplo:
  ```
  const pessoa = { nome: 'Ana', idade: 25 };

  for (let chave in pessoa) {
      console.log(`${chave}: ${pessoa[chave]}`);
  }
  ```


- for...of: Itera sobre os valores de arrays. 

  exemplo:
  ```
  const frutas = ['maçã', 'banana', 'laranja'];

  for (let fruta of frutas) {
      console.log(fruta); 
  }
  ````


- forEach: método de array que executa uma função fornecida para cada elemento do array.

  exemplo:
  ````
    const numeros = [1, 2, 3, 4];

    numeros.forEach(numero => {
        console.log(numero); 
    });
  ````


- while: Executa um bloco de código enquanto uma condição é verdadeira. Utilizado quando se necessita repetir um bloco de código enquanto uma condição é verdadeira e não sabe o número exato de iterações.

  exemplo:
  ````
  let i = 0;

  while (i < 5) {
      console.log(i); // Saída: 0, 1, 2, 3, 4
      i++;
  }
  ````

- do...while: Executa um bloco de código pelo menos uma vez e continua enquanto a condição for verdadeira. Quando precisamos garantir que o código seja executado pelo menos uma vez antes de verificar a condição.

  exemplo
  ````
  let i = 0;

  do {
      console.log(i); // Saída: 0, 1, 2, 3, 4
      i++;
  } while (i < 5);
  ````


## Estruturas Condicionais

- if/else: Executa um bloco de código se a condição for verdadeira; pode ter um bloco else para o caso contrário Utilizado quando a ação é baseada em uma condição.

  exemplo:
  ````
  const numero = 10;
  
  if (numero > 0) {
      console.log('Número positivo');
  } else {
      console.log('Número não positivo');
  }
  ````

- switch: Executa diferentes blocos de código com base no valor de uma expressão. É uma alternativa ao if/else quando há muitas condições baseadas em valores específicos.

  exemplo:
  ````
  const dia = 3;

  switch (dia) {
      case 1:
          console.log('Segunda-feira');
          break;
      case 2:
          console.log('Terça-feira');
          break;
      case 3:
          console.log('Quarta-feira');
          break;
      default:
          console.log('Dia inválido');
  }
  ````