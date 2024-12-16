// Função para abrir e fechar a gaveta lateral
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideDrawer = document.querySelector('.side-drawer');
    const closeBtn = document.querySelector('.close-btn');

    // Abrir a gaveta lateral
    menuToggle.addEventListener('click', () => {
        sideDrawer.classList.add('open');
    });

    // Fechar a gaveta lateral
    closeBtn.addEventListener('click', () => {
        sideDrawer.classList.remove('open');
    });
});
