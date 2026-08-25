// Seleciona o botão de leitura dentro do post
const readMoreButton = document.querySelector('.btn-read-more');

// Adiciona um evento de clique ao botão
readMoreButton.addEventListener('click', function() {
  // Cria um alerta na tela
  alert('Obrigado pelo interesse! O post completo está sendo carregado...');
  
  // Exemplo de mudança visual via JS: muda a cor do botão após o clique
  this.textContent = 'Carregando...';
  this.style.backgroundColor = '#6c757d';
  this.disabled = true;
});
