const listaTarefas = [
  "estudar JavaScript",
  "praticar HTML",
  "ler um livro",
  "fazer exercícios da aula",
  "assistir um vídeo sobre CSS",
];

// capturei minha UL na dom
const lista = document.getElementById("lista-tarefas");

// percorrendo meu objeto
listaTarefas.map((tarefa) => {
  // criando uma li chamada itemLista
  const itemLista = document.createElement("li");

  // cada li receberá um elemento do array
  itemLista.textContent = tarefa;

  // estou inserindo as lis na minha lista
  lista.appendChild(itemLista);
});

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const responseElement = document.getElementById("response");
    responseElement.innerHTML = "";

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        responseElement.innerHTML = `<p>Login bem sucedid! Token ${data.accessToken}</p>`;
      } else {
        responseElement.innerHTML = `<p>Erro: ${data.message}</p>`;
      }
    } catch (error) {
      responseElement.innerHTML = `<p>Erro na requisição: ${error.message}</p>`;
    }
  });
