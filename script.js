// Inicialização da biblioteca AOS para animações
AOS.init({
  duration: 1000, // Duração da animação
  once: true,     // Executa as animações apenas uma vez
  offset: 100,    // Define o tempo para as animações aparecerem ao rolar
});

// Interatividade dos Botões de Compra
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Obrigado pela compra! Em breve, você receberá o bot no seu servidor.');
  });
});

// Scroll suave para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
