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
