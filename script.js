// Alterna a gaveta lateral
function toggleDrawer() {
    const sideDrawer = document.getElementById("sideDrawer");
    sideDrawer.classList.toggle("active");
}

// Scroll para a oferta
function scrollToOffer() {
    const offerSection = document.getElementById("offer");
    offerSection.scrollIntoView({ behavior: "smooth" });
}

// Esconde o botão de oferta no final da página
document.addEventListener("scroll", () => {
    const popupBtn = document.getElementById("popupBtn");
    const footerPosition = document.querySelector("footer").getBoundingClientRect().top;

    if (footerPosition < window.innerHeight) {
        popupBtn.classList.add("hidden");
    } else {
        popupBtn.classList.remove("hidden");
    }
});

// Cronômetro de contagem regressiva
const timerElement = document.getElementById("timer");
const initialTimeInSeconds = 88440; // 1 dia e 34 minutos em segundos

function startTimer() {
    const savedEndTime = localStorage.getItem("offerEndTime");
    let endTime;

    if (savedEndTime) {
        endTime = parseInt(savedEndTime, 10);
    } else {
        endTime = Date.now() + initialTimeInSeconds * 1000;
        localStorage.setItem("offerEndTime", endTime);
    }

    function updateTimer() {
        const remainingTime = Math.max(0, endTime - Date.now());

        if (remainingTime === 0) {
            timerElement.textContent = "Oferta Expirada!";
            localStorage.removeItem("offerEndTime");
            return;
        }

        const hours = Math.floor(remainingTime / 3600000);
        const minutes = Math.floor((remainingTime % 3600000) / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);

        timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        requestAnimationFrame(updateTimer);
    }

    updateTimer();
}

document.addEventListener("DOMContentLoaded", startTimer);
