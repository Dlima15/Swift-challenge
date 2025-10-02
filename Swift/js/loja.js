document.addEventListener('DOMContentLoaded', () => {
    const rewardCards = document.querySelectorAll('.reward-card');
    const saldoValue = document.querySelector('.saldo-value');
    let currentSaldo = 10; // Saldo inicial para demonstração

    saldoValue.innerHTML = `${currentSaldo} <i class="fas fa-coins coin-icon pulse-coin"></i>`;
    
    // 1. Funcionalidade de Compra e Animação
    rewardCards.forEach(card => {
        const cost = parseInt(card.dataset.cost);

        card.addEventListener('click', function() {
            // Efeito de clique e feedback visual
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 200);

            if (currentSaldo >= cost) {
                // Simulação de compra bem-sucedida
                currentSaldo -= cost;
                saldoValue.innerHTML = `${currentSaldo} <i class="fas fa-coins coin-icon pulse-coin"></i>`;
                
                // Animação de sucesso (ex: brilho verde)
                this.classList.add('purchase-success');
                showFloatingText(this, `-${cost} Moedas!`, 'success');

                setTimeout(() => {
                    this.classList.remove('purchase-success');
                }, 1000);

            } else {
                // Animação de erro (ex: balançar e cor vermelha)
                this.classList.add('purchase-fail');
                showFloatingText(this, 'Saldo Insuficiente!', 'fail');

                setTimeout(() => {
                    this.classList.remove('purchase-fail');
                }, 800);
            }
        });
    });

    // 2. Efeito de Texto Flutuante (Feedback de Compra)
    function showFloatingText(element, text, type) {
        const floatingText = document.createElement('div');
        floatingText.className = `floating-feedback floating-${type}`;
        floatingText.textContent = text;
        element.appendChild(floatingText);

        // Adiciona estilos para animação
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes floatAndFade {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(-50px); opacity: 0; }
            }
            .floating-feedback {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-weight: bold;
                padding: 5px 10px;
                border-radius: 5px;
                white-space: nowrap;
                animation: floatAndFade 1s forwards;
                pointer-events: none;
                z-index: 100;
            }
            .floating-success { background: #4CAF50; color: white; }
            .floating-fail { background: #f44336; color: white; animation: floatAndFade 0.8s forwards; }
            .reward-card.purchase-success { border: 3px solid #4CAF50 !important; }
            .reward-card.purchase-fail { animation: shake 0.5s; }

            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-5px); }
                40%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);

        // Remove o elemento após a animação
        setTimeout(() => {
            floatingText.remove();
        }, 1000);
    }
});