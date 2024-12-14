const timerElement = document.getElementById("timer");

function startCountdown(durationInMinutes) {
    let timer = durationInMinutes * 60;
    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        timerElement.textContent = `${minutes}m ${seconds}s`;

        if (--timer < 0) {
            clearInterval(interval);
            timerElement.textContent = "Oferta Expirada!";
        }
    }, 1000);
}

startCountdown(60); // Timer de 1 hora
