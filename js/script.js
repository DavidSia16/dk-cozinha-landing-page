document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");

  // Abre/fecha o menu ao clicar no botão hambúrguer
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Fecha o menu automaticamente quando o usuário clica em qualquer link da lista
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      menu.classList.remove("active");
    });
  });
});

