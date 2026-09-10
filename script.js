// Animación sencilla al entrar a la página
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card, .tool-card").forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(18px)";
    setTimeout(() => {
      card.style.transition = "opacity .5s ease, transform .5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 + i * 70);
  });
});
