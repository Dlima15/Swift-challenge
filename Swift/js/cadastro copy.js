document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastroForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Captura os campos
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value;
      const confirmarSenha = document.getElementById("confirmarSenha").value;
      const estado = document.getElementById("estado").value;
      const cidade = document.getElementById("cidade").value;

      // Verifica se todos os campos estão preenchidos
      if (!nome || !email || !senha || !confirmarSenha || !estado || !cidade) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Verifica se as senhas coincidem
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Verifique e tente novamente.");
        return;
      }

      // Validação básica de e-mail
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValido) {
        alert("E-mail inválido.");
        return;
      }

      // Simula envio
      alert(
        `Cadastro realizado com sucesso para ${nome} em ${cidade}, ${estado}!`
      );

      // Aqui você pode redirecionar ou integrar com backend
      // Exemplo: window.location.href = "perfil.html";
    });
  }
});
