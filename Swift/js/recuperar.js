document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recuperarForm");
  const email = document.getElementById("email");
  const novaSenha = document.getElementById("novaSenha");
  const confirmarSenha = document.getElementById("confirmarSenha");
  const recuperarBtn = document.getElementById("recuperarBtn");

  function validarCampos() {
    const senha = novaSenha.value;
    const repetir = confirmarSenha.value;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
    const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(senha);

    if (emailValido && senhaForte && senha === repetir) {
      recuperarBtn.removeAttribute("disabled");
    } else {
      recuperarBtn.setAttribute("disabled", true);
    }
  }

  email.addEventListener("input", validarCampos);
  novaSenha.addEventListener("input", validarCampos);
  confirmarSenha.addEventListener("input", validarCampos);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Senha redefinida com sucesso!");
    window.location.href = "login.html";
  });

  document
    .getElementById("alterarEmail")
    .addEventListener("click", function (e) {
      e.preventDefault();
      const toast = new bootstrap.Toast(document.getElementById("toastEmail"));
      toast.show();
    });
});

function toggleSenha(idCampo, icone) {
  const campo = document.getElementById(idCampo);
  const tipoAtual = campo.getAttribute("type");

  if (tipoAtual === "password") {
    campo.setAttribute("type", "text");
    icone.classList.remove("bi-eye-slash");
    icone.classList.add("bi-eye");
  } else {
    campo.setAttribute("type", "password");
    icone.classList.remove("bi-eye");
    icone.classList.add("bi-eye-slash");
  }
}
