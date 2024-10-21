function togglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const password = document.getElementById("password");
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
}

/* const validUserMail = "usuario@mail.com";
const validPassword = "senha123";
*/

// verificar se o UUID está salvo em LocalStorage
/* document.addEventListener("DOMContentLoaded", function () {
  const storedUUID = localStorage.getItem(validUserMail);

  if (storedUUID) {
    window.location.href = "./pages/loggedUser/index.html";
    return;
  }
});
 */

// verificar se existe um token salvo em LocalStorage
document.addEventListener("DOMContentLoaded", function () {
  const storedToken = localStorage.getItem("accessToken");

  console.log(storedToken);
  if (storedToken) {
    window.location.href = "./pages/loggedUser/index.html";
    return;
  }
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("email").value;
    const userPassword = document.getElementById("password").value;

    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: userName,
        password: userPassword,
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.accessToken) {
          console.log("Login bem-sucedido!");

          localStorage.setItem("accessToken", data.accessToken);
          window.location.href = "./pages/loggedUser/index.html";
        } else {
          console.log("Erro no login: ", data.message);
        }
      })
      .catch((error) => {
        console.log("Erro na requisição: ", error);
      });
  });
