// AVALIAÇÃO
document.addEventListener("DOMContentLoaded", function () {
  const bellIcon = document.querySelector(".bi-bell");
  if (bellIcon) {
    bellIcon.addEventListener("click", () => {
      alert("Você não possui novas notificações.");
    });
  }

  const gearIcon = document.querySelector(".bi-gear");
  if (gearIcon) {
    gearIcon.addEventListener("click", () => {
      window.location.href = "configuracao.html";
    });
  }

  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.transition = "width 1s ease-in-out";
  }

  const voltarBtn = document.getElementById("voltarBtn");
  if (voltarBtn) {
    voltarBtn.addEventListener("click", () => {
      window.location.href = "perfil.html";
    });
  }
});
