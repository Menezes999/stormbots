
function toggleDrawer() {
    const sideDrawer = document.getElementById('sideDrawer');
    sideDrawer.classList.toggle('active');
}


function scrollToOffer() {
    const offerSection = document.getElementById('offer');
    offerSection.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('scroll', () => {
    const popupBtn = document.getElementById('popupBtn');
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        popupBtn.classList.add('hidden');
    } else {
        popupBtn.classList.remove('hidden');
    }
});


const timerElement = document.getElementById('timer');
const initialTimeInMinutes = 10; 
const initialTimeInSeconds = initialTimeInMinutes * 60;

function startTimer() {
    const savedTime = localStorage.getItem('offerEndTime');
    let endTime;

    if (savedTime) {
        endTime = parseInt(savedTime, 10);
    } else {
        endTime = Date.now() + initialTimeInSeconds * 1000; 
        localStorage.setItem('offerEndTime', endTime);
    }

    function updateTimer() {
        const now = Date.now();
        const timeLeft = Math.max(0, endTime - now);

        if (timeLeft === 0) {
            timerElement.textContent = "Oferta Expirada!";
            localStorage.removeItem('offerEndTime'); 
            return;
        }

        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        requestAnimationFrame(updateTimer);
    }

    updateTimer();
}

document.addEventListener('DOMContentLoaded', startTimer);
