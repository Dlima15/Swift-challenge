console.log("Script de perfil carregado!");

// Recupera o usuário logado do localStorage
const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuarioLogado) {
  // Preenche os campos do perfil com os dados do usuário logado
  document.getElementById("perfilNome").textContent =
    usuarioLogado.nome || "Não informado";
  document.getElementById("perfilEmail").textContent =
    usuarioLogado.email || "Não informado";
  document.getElementById("perfilEstado").textContent =
    usuarioLogado.estado || "Não informado";
  document.getElementById("perfilCidade").textContent =
    usuarioLogado.cidade || "Não informado";
} else {
  // Se não houver usuário logado, redireciona para o login
  alert("Você precisa estar logado para acessar o perfil.");
  window.location.href = "index.html";
}

