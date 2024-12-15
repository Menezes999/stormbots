// Função para abrir/fechar o menu lateral
function toggleDrawer() {
    const sideDrawer = document.getElementById('sideDrawer');
    sideDrawer.classList.toggle('active');
}

// Função para rolar a página até a seção de "Oferta"
function scrollToOffer() {
    const offerSection = document.getElementById('offer');
    offerSection.scrollIntoView({ behavior: 'smooth' });
}

// Função para iniciar a contagem regressiva da oferta
window.onload = function() {
    const timerElement = document.getElementById('timer');
    let offerTime = new Date().getTime() + 3600000;  // Oferta válida por 1 hora a partir de agora

    function updateTimer() {
        const currentTime = new Date().getTime();
        const timeLeft = offerTime - currentTime;

        if (timeLeft <= 0) {
            timerElement.innerHTML = 'Oferta Expirada!';
        } else {
            const hours = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60)) / 1000);
            const seconds = Math.floor((timeLeft % 1000) / 100);
            timerElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }
    }

    setInterval(updateTimer, 1000);  // Atualiza o tempo a cada segundo
};
