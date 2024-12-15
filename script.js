// Temporizador para a oferta
const offerTimer = document.getElementById("offer-timer");

let deadline = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 horas a partir de agora

// Atualiza o temporizador a cada segundo
let timerInterval = setInterval(function() {
    let now = new Date().getTime();
    let remainingTime = deadline - now;

    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        offerTimer.innerHTML = "Oferta Expirada!";
    } else {
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        
        offerTimer.innerHTML = `Tempo Restante: ${hours}h ${minutes}m ${seconds}s`;
    }
}, 1000);

// Abrir a gaveta lateral
const menuToggle = document.getElementById('menu-toggle');
const sideDrawer = document.getElementById('side-drawer');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    sideDrawer.classList.add('active');
});

// Fechar a gaveta lateral
closeBtn.addEventListener('click', () => {
    sideDrawer.classList.remove('active');
});
