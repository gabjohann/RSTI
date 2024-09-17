/* 
4. Crie duas funções assíncronas que retornem Promises 
simulando a obtenção de dados diferentes. 
Use Promise.All para obter ambos os resultados simultaneamente. 
*/

function fetchData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados 01")
    }, 1000)
  })
}

function fetchData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados 02")
    }, 1500)
  })
}

async function fetchBothData() {
  const [data1, data2] = await Promise.all([fetchData1(), fetchData2()])

  return `${data1} e ${data2}`
}

fetchBothData().then(console.log)
