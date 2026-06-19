// Seleciona os elementos da página
const btnPlay = document.getElementById('btn-play');
const telaInicio = document.getElementById('tela-inicio');
const telaJogo = document.getElementById('tela-jogo');

// Adiciona o evento de clique no botão
btnPlay.addEventListener('click', () => {
    telaInicio.classList.add('oculto'); // Esconde a tela de início
    telaJogo.classList.remove('oculto'); // Mostra a tela do jogo
});