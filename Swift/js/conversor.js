// Valores de XP atuais
const xpAtual = 2530;
const xpTotal = 25000;

// Calcula porcentagem de progresso
const xpPercent = (xpAtual / xpTotal) * 100;

// Atualiza largura da barra de progresso
document.getElementById("xpFill").style.width = xpPercent + "%";

// Atualiza texto de XP
document.getElementById("xpText").textContent = `XP: ${xpAtual} / ${xpTotal}`;
