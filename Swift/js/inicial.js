document.addEventListener('DOMContentLoaded', () => {
    // 1. Simulação de Progresso Animado na Missão Diária
    const dailyTaskCard = document.querySelector('.daily-task');
    const progressFillDaily = dailyTaskCard.querySelector('.progress-bar-task .progress-fill');
    const progressTextDaily = dailyTaskCard.querySelector('.progress-bar-task .progress-text');

    let currentSales = parseInt(progressFillDaily.dataset.current);
    const totalSales = parseInt(progressFillDaily.dataset.total);
    const xpReward = dailyTaskCard.querySelector('.xp-reward').textContent;
    
    // Animação de 'venda realizada' ao clicar
    dailyTaskCard.addEventListener('click', () => {
        if (currentSales < totalSales) {
            currentSales++;
            
            // Atualiza o progresso visual
            const percentage = (currentSales / totalSales) * 100;
            progressFillDaily.style.width = `${percentage}%`;
            progressTextDaily.textContent = `${currentSales}/${totalSales}`;
            progressFillDaily.dataset.current = currentSales;

            // Feedback visual: pulso na barra
            dailyTaskCard.classList.add('pulse');
            setTimeout(() => {
                dailyTaskCard.classList.remove('pulse');
            }, 300);

            if (currentSales === totalSales) {
                // Efeito de Conclusão!
                dailyTaskCard.classList.add('completed');
                showCompletionEffect(dailyTaskCard, xpReward);
            }
        }
    });

    // 2. Efeito de Conclusão com "Explosão" de XP
    function showCompletionEffect(element, rewardText) {
        // Cria o elemento de recompensa animado
        const reward = document.createElement('div');
        reward.className = 'completion-reward';
        reward.textContent = `+${rewardText} CONCLUÍDO!`;
        element.appendChild(reward);

        // Adiciona um CSS para a animação da explosão
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes rewardExplode {
                0% { transform: scale(1) translateY(0); opacity: 1; }
                100% { transform: scale(1.5) translateY(-50px); opacity: 0; }
            }
            .completion-reward {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #4CAF50; /* Verde de sucesso */
                color: white;
                padding: 10px 15px;
                border-radius: 20px;
                font-weight: bold;
                animation: rewardExplode 1.5s forwards;
                pointer-events: none;
                z-index: 10;
                box-shadow: 0 0 15px rgba(76, 175, 80, 0.8);
            }
            .daily-task.completed {
                border: 3px solid #4CAF50;
                transform: scale(1.05);
                transition: transform 0.3s;
            }
        `;
        document.head.appendChild(style);

        // Remove o elemento de recompensa após a animação
        setTimeout(() => {
            reward.remove();
        }, 1500);
    }
    
    // 3. Efeito de feedback visual nos ícones clicáveis
    document.querySelectorAll('.clickable-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            // Efeito de "pop"
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1) rotate(5deg)'; 
            }, 100);
            
            // Simula uma ação no console
            console.log(`Ícone clicado: ${this.dataset.text}`);
        });
    });

});