const timerElement = document.getElementById("timer");

// Função para calcular e exibir o tempo restante
function startCountdown(durationInMinutes) {
    const now = new Date().getTime();
    const storedEndTime = localStorage.getItem("offerEndTime");

    let endTime;

    // Se houver tempo salvo no localStorage, usa ele. Caso contrário, define um novo.
    if (storedEndTime) {
        endTime = parseInt(storedEndTime);
    } else {
        endTime = now + durationInMinutes * 60 * 1000; // Tempo total em milissegundos
        localStorage.setItem("offerEndTime", endTime); // Salva no localStorage
    }

    // Atualiza o timer a cada segundo
    const interval = setInterval(() => {
        const currentTime = new Date().getTime(); // Tempo atual
        const timeLeft = endTime - currentTime; // Calcula o tempo restante

        if (timeLeft > 0) {
            // Converte milissegundos em minutos e segundos
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            timerElement.textContent = `${minutes}m ${seconds}s`;
        } else {
            // Quando o tempo expira
            clearInterval(interval);
            timerElement.textContent = "Oferta Expirada!";
            localStorage.removeItem("offerEndTime"); // Remove o tempo salvo no localStorage
        }
    }, 1000);
}

// Inicia o timer com 1 hora (60 minutos)
startCountdown(60);
