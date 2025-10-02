document.addEventListener('DOMContentLoaded', () => {
    const dateBoxes = document.querySelectorAll('.date-item');
    const dateIndicator = document.querySelector('.date-indicator');
    const dayNameSpan = document.querySelector('.day-name');

    // Inicializa o dia da semana para a data selecionada por padrão (17 Sábado)
    if (document.querySelector('.selected-date')) {
        const defaultDay = document.querySelector('.selected-date').dataset.day;
        dayNameSpan.textContent = defaultDay.toLowerCase();
        dateIndicator.innerHTML = `${document.querySelector('.selected-date').textContent} <span class="day-name">${defaultDay.toLowerCase()}</span>`;
    }

    dateBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // 1. Remove a seleção de todas as datas
            dateBoxes.forEach(d => {
                d.classList.remove('selected-date');
                d.style.animation = 'none'; // Para o pulso na data anterior
            });

            // 2. Adiciona a seleção à data clicada
            this.classList.add('selected-date');
            this.style.animation = 'pulseDate 1s infinite alternate'; // Inicia o pulso

            // 3. Atualiza o indicador de data no topo da grade de horários
            const newDate = this.textContent.trim();
            // Simulação simples do nome do dia (apenas para o 17 ser "sábado" como no design)
            const dayText = (newDate === '17' && this.dataset.day) ? 'sábado' : 'dia'; 
            
            dateIndicator.innerHTML = `${newDate} <span class="day-name">${dayText}</span>`;
            
        });
    });
    
    // Animação de "click" para o botão de adicionar
    const addButton = document.querySelector('.btn-add-event');
    addButton.addEventListener('click', function() {
        this.style.transform = 'scale(0.9) rotate(0deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1.1) rotate(90deg)';
        }, 100);
        console.log("Abrindo modal para novo agendamento...");
    });
});