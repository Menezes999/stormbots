
function toggleDrawer() {
    const drawer = document.getElementById('sideDrawer');
    drawer.classList.toggle('active');
}


function scrollToOffer() {
    document.getElementById('offer').scrollIntoView({ behavior: 'smooth' });
}


window.addEventListener('scroll', function () {
    const popupBtn = document.getElementById('popupBtn');
    const offerSection = document.getElementById('offer');
    const offerTop = offerSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (offerTop <= windowHeight / 2) {
        popupBtn.style.display = 'none';
    } else {
        popupBtn.style.display = 'flex';
    }
});


window.onload = function () {
    const timerElement = document.getElementById('timer');
    const targetDate = new Date().getTime() + 1000 * 60 * 60;

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
