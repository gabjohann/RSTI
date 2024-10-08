const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let valid = true;

  if (!validatedEmail(email)) {
    valid = false;
    alert("Por favor, insira um e-mail válido!");
  }

  if (password.length < 6) {
    valid = false;
    alert("A senha deve ter pelo menos 6 caracteres.");
  }

  const loggedUser = localStorage.getItem("login-form");

  if (loggedUser) {
    alert("Você já está logado!");
  } else {
    localStorage.setItem("login-form", "loggedUser");

    alert("Formulário enviado com sucesso!");
  }

  /*   if (valid) {
    alert("Formulário enviado com sucesso!");
    localStorage.setItem("login-form", "loggedUser");
  } */
});

function validatedEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/* function tooglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const customType =
    password.getAttribute("type") == "password" ? "text" : "password";

  password.setAttribute("type", customType);

  console.log(customType);
}
 */
