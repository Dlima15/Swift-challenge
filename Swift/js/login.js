document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email"); // O campo 'email' será o nosso 'Usuário'
    const senhaInput = document.getElementById("password");
    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
    const alertMessage = document.getElementById("alertMessage");
    const eyeIcon = document.querySelector(".toggle-eye"); // Seleciona o ícone que já está no HTML

    alert("Bem vindo avaliador, o login para acesso é admin@swift.com e senha:0000")

    // --------------------------------------------------------
    // Lógica para Alternar Visibilidade da Senha
    // --------------------------------------------------------

    // Mostra o ícone quando há conteúdo no campo de senha
    senhaInput.addEventListener("input", () => {
        // Usa o operador ternário para exibir ou esconder o ícone
        eyeIcon.style.display = senhaInput.value.length > 0 ? "block" : "none";
    });

    // Alterna visibilidade da senha ao clicar no ícone
    eyeIcon.addEventListener("click", () => {
        const isPassword = senhaInput.type === "password";
        senhaInput.type = isPassword ? "text" : "password";
        
        // Altera o ícone (bi-eye ou bi-eye-slash)
        eyeIcon.classList.remove(isPassword ? "bi-eye-slash" : "bi-eye");
        eyeIcon.classList.add(isPassword ? "bi-eye" : "bi-eye-slash");
    });

    // --------------------------------------------------------
    // Lógica de Validação de Login e Redirecionamento
    // --------------------------------------------------------

    const correctUsername = "admin@swift.com";
    const correctPassword = "0000";
    const redirectPage = "menu.html"; // Página de destino

    function handleLogin(event) {
        event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)

        const enteredUsername = emailInput.value.trim(); // Pega o valor do campo email
        const enteredPassword = senhaInput.value;

        // Limpa a mensagem de alerta anterior
        alertMessage.classList.add('d-none');
        alertMessage.textContent = '';

        // *** VALIDAÇÃO DE CREDENCIAIS FIXAS ***
        if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
            // Sucesso no login
            console.log("Login bem-sucedido! Redirecionando para GERAL.html...");
            // Redireciona o usuário para a página principal
            window.location.href = redirectPage;
        } else {
            // Falha no login
            alertMessage.textContent = "Usuário ou senha inválidos. Credenciais de teste: Usuário: admin@swift.com | Senha: 0000";
            alertMessage.classList.remove('d-none');
            
            // Limpa o campo de senha por segurança
            senhaInput.value = "";
            eyeIcon.style.display = "none";
        }
    }

    // Adiciona o evento de submissão do formulário
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});