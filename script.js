// Função para exibir o timer de oferta
function startOfferCountdown(durationInMinutes) {
    const timerElement = document.getElementById("offer-timer");
    const now = new Date().getTime();
    const storedEndTime = localStorage.getItem("offerEndTime");

    let endTime;

    // Se houver tempo salvo, usa ele, senão define um novo
    if (storedEndTime) {
        endTime = parseInt(storedEndTime);
    } else {
        endTime = now + durationInMinutes * 60 * 1000; // Define o novo tempo de expiração
        localStorage.setItem("offerEndTime", endTime); // Salva no localStorage
    }

    // Atualiza o timer a cada segundo
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeLeft = endTime - currentTime;

        if (timeLeft > 0) {
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            timerElement.textContent = `${minutes}m ${seconds}s`;
        } else {
            clearInterval(interval);
            timerElement.textContent = "Oferta Expirada!";
            localStorage.removeItem("offerEndTime"); // Remove o tempo salvo após a expiração
        }
    }, 1000);
}

// Inicia o contador com 60 minutos (1 hora)
startOfferCountdown(60);

// Script da gaveta lateral
const menuToggle = document.getElementById('menu-toggle');
const sideDrawer = document.getElementById('side-drawer');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    sideDrawer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sideDrawer.classList.remove('active');
});
