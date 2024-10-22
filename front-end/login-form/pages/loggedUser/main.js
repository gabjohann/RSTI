document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("accessToken");
  window.location.href = "../../index.html";
});
