/* abre e fecha o menu quando clicar no ícone */
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

/* Carrossel de testemunhos coms swiper */
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/* scrollreveal: mostra os elementos quando der scroll na página */
/* const scrollReval = ScrollReveal({
  origin: "top",
  distance: "20px",
  duration: 700,
  reset: true,
});

scrollReval.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer .social
  `,
  {
    interval: 100,
  }
); */

/* botão de voltar ao topo da página */
function backToTop() {
  console.log(window.scrollY);

  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY >= 760) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", function () {
  backToTop();
});
