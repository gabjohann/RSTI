/* document
  .getElementById("githubForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Usuário não encontrado");
        }
        const data = response.json();
        return data;
      })
      .then((data) => {
        const resultElement = document.getElementById("result");

        resultElement.innerHTML = `
       <h2>${data.login}</h2>
       <p><strong>Nome:</strong>${data.name}</p>
              <img src="${data.avatar_url}" alt="Avatar" width="100">
              <p><strong>Seguidores:</strong> ${data.followers}</p>
        `;
      });
  });
 */

document.addEventListener("DOMContentLoaded", function () {
  const username = "gabjohann";
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Usuário não encontrado");
      }
      return response.json();
    })
    .then((data) => {
      const resultElement = document.getElementById("result");

      resultElement.innerHTML = `
          <h2>${data.login}</h2>
          <p><strong>Nome:</strong> ${data.name}</p>
          <img src="${data.avatar_url}" alt="Avatar" width="100">
          <p><strong>Seguidores:</strong> ${data.followers}</p>
        `;
    })
    .catch((error) => {
      console.error(error);
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `<p>${error.message}</p>`;
    });
});
