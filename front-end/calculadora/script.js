document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(`${theme}-theme`);

  const toggleButton = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("icon-theme");

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // alternancia da classe do body
    document.body.classList.remove(`${currentTheme}-theme`);
    document.body.classList.add(`${newTheme}-theme`);

    themeIcon.src =
      newTheme === "dark" ? "./assets/sun.svg" : "./assets/moon.svg";

    localStorage.setItem("theme", newTheme);
  });
});
