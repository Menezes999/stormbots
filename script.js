
AOS.init({
  duration: 1200,
  once: true,
  offset: 100,
});

// Botões interativos
document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Informações do bot enviadas para seu e-mail!');
  });
});
