// Função para abrir e fechar a gaveta lateral
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideDrawer = document.querySelector('.side-drawer');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', () => {
        sideDrawer.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sideDrawer.classList.remove('open');
    });
});
