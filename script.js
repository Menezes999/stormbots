function toggleDrawer() {
    const sideDrawer = document.getElementById("sideDrawer");
    sideDrawer.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");
    if (!timerElement) return;

    const deadline = 24 * 60 * 60 * 1000 + 34 * 60 * 1000; // 1 dia e 34 minutos
    const now = Date.now();
    const startTime = localStorage.getItem("startTime") || now;

    const elapsedTime = now - startTime;
    const remainingTime = Math.max(deadline - elapsedTime, 0);

    if (!localStorage.getItem("startTime")) {
        localStorage.setItem("startTime", startTime);
    }

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function updateTimer() {
        if (remainingTime <= 0) {
            timerElement.textContent = "Tempo Esgotado!";
            return;
        }

        timerElement.textContent = formatTime(remainingTime);
        requestAnimationFrame(updateTimer);
    }

    updateTimer();
});
