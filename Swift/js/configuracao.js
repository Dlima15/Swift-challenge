// CONFIGURAÇÃO
document.addEventListener("DOMContentLoaded", function () {
  const editarBtn = document.getElementById("editarBtn");
  const salvarBtn = document.getElementById("salvarBtn");
  const excluirBtn = document.getElementById("excluirBtn");
  const perfilForm = document.getElementById("perfilForm");
  const select = document.getElementById("funcao");

  if (perfilForm) {
    const inputs = perfilForm.querySelectorAll("input");

    if (editarBtn) {
      editarBtn.addEventListener("click", () => {
        inputs.forEach((input) => input.removeAttribute("readonly"));
        select.removeAttribute("disabled");
      });
    }

    if (salvarBtn) {
      salvarBtn.addEventListener("click", () => {
        inputs.forEach((input) => input.setAttribute("readonly", true));
        select.setAttribute("disabled", true);
        alert("Dados salvos com sucesso!");
      });
    }

    if (excluirBtn) {
      excluirBtn.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja excluir este perfil?")) {
          perfilForm.reset();
          inputs.forEach((input) => input.setAttribute("readonly", true));
          select.setAttribute("disabled", true);
          alert("Perfil excluído.");
        }
      });
    }
  }
});
