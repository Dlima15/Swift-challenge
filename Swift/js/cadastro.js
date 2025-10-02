 const form = document.getElementById("formCadastro");
    const email = document.getElementById("email");
    const confirmarEmail = document.getElementById("confirmarEmail");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");
    const mensagem = document.getElementById("mensagem");
    const toggleSenha = document.getElementById("toggleSenha");
    const lembrar = document.getElementById("lembrar");

    // Mostrar/ocultar senha
    toggleSenha.addEventListener("click", () => {
      if (senha.type === "password") {
        senha.type = "text";
        confirmarSenha.type = "text";
        toggleSenha.innerHTML = '<i class="bi bi-eye-slash"></i>';
      } else {
        senha.type = "password";
        confirmarSenha.type = "password";
        toggleSenha.innerHTML = '<i class="bi bi-eye"></i>';
      }
    });

    // Validação do formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // impede envio

      if (email.value !== confirmarEmail.value) {
        mensagem.innerHTML = `<div class="alert alert-danger"> Os emails não coincidem!</div>`;
        return;
      }

      if (senha.value !== confirmarSenha.value) {
        mensagem.innerHTML = `<div class="alert alert-danger"> As senhas não coincidem!</div>`;
        return;
      }

      // Se "lembrar" estiver marcado, salvar no localStorage
      if (lembrar.checked) {
        localStorage.setItem("nome", document.getElementById("nome").value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("cargo", document.getElementById("cargo").value);
      }

      mensagem.innerHTML = `<div class="alert alert-success"> Cadastro realizado com sucesso!</div>`;
      form.reset();
    });

    // Pré-carregar dados salvos
    window.onload = () => {
      if (localStorage.getItem("nome")) {
        document.getElementById("nome").value = localStorage.getItem("nome");
        document.getElementById("email").value = localStorage.getItem("email");
        document.getElementById("cargo").value = localStorage.getItem("cargo");
        lembrar.checked = true;
      }
    }