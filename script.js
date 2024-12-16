// Função para alternar a gaveta lateral
function toggleDrawer() {
    const drawer = document.getElementById('side-drawer');
    drawer.classList.toggle('open');
}

document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Desabilita o menu de contexto
});
