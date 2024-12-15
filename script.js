
// Função para abrir/fechar a gaveta lateral
function toggleDrawer() {
    const sideDrawer = document.getElementById('side-drawer');
    sideDrawer.classList.toggle('active');
}

// Função para rolar até a seção de oferta
function scrollToOffer() {
    document.getElementById('offer').scrollIntoView({ behavior: 'smooth' });
}

// Timer da Oferta Exclusiva
window.onload = function() {
    const timerElement = document.getElementById('timer');
    const targetDate = new Date().getTime() + 1000 * 60 * 60; // 1 hora a partir de agora

    function updateTimer() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            timerElement.innerHTML = 'Oferta expirada';
            return;
        }

        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(updateTimer, 1000);
};
