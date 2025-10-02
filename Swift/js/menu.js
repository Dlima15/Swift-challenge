document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do Sidebar para Mobile (usando o collapse do Bootstrap)
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const contentArea = document.getElementById('content-area');

    // Função para abrir/fechar o sidebar no mobile
    const toggleSidebar = () => {
        const isMobile = window.innerWidth < 992;
        if (isMobile) {
            if (sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
            } else {
                sidebar.classList.add('show');
            }
        }
    };

    if (openBtn) {
        openBtn.addEventListener('click', toggleSidebar);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleSidebar);
    }
    
    // Fechar o sidebar ao clicar em um link no mobile
    document.querySelectorAll('.sidebar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const isMobile = window.innerWidth < 992;
            if (isMobile) {
                // Fechar o sidebar após o clique
                sidebar.classList.remove('show');
            }
            // Simulação de navegação (em um sistema real, o link levaria à página)
            console.log(`Navegando para: ${link.textContent.trim()}`);
        });
    });

    // Fechar o sidebar ao clicar fora dele no mobile (simulação de overlay)
    contentArea.addEventListener('click', (e) => {
        const isMobile = window.innerWidth < 992;
        if (isMobile && sidebar.classList.contains('show') && !sidebar.contains(e.target) && !openBtn.contains(e.target)) {
            sidebar.classList.remove('show');
        }
    });

    // Funções de animação simples para os ícones de acesso rápido
    document.querySelectorAll('.icon-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.querySelector('i').classList.add('fa-beat'); // Adiciona animação do Font Awesome
        });
        link.addEventListener('mouseleave', function() {
            this.querySelector('i').classList.remove('fa-beat');
        });
    });
});