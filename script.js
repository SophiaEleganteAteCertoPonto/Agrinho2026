// Seleciona os elementos da página
const btnPlay = document.getElementById('btn-play');
const telaInicio = document.getElementById('tela-inicio');
const telaJogo = document.getElementById('tela-jogo');

// Adiciona o evento de clique no botão
btnPlay.addEventListener('click', () => {
    telaInicio.classList.add('oculto'); // Esconde a tela de início
    telaJogo.classList.remove('oculto'); // Mostra a tela do jogo
});

// 1. Sua lista de perguntas, alternativas e a resposta correta
const perguntas = [
    {
        pergunta: "O que são agrotóxicos?",
        alternativas: [
            "Produtos químicos ou biológicos usados para proteger plantações contra pragas e doenças.",
            "Vitaminas artificiais injetadas no solo para acelerar o crescimento das plantas.",
            "Apenas venenos líquidos usados para matar formigas e insetos domésticos."
        ],
        correta: 0 // Indica que a primeira alternativa (índice 0) é a certa
    },
    {
        pergunta: "Qual é o termo técnico frequentemente utilizado para se referir aos agrotóxicos?",
        alternativas: [
            "Fertilizantes minerais.",
            "Defensivos agrícolas ou pesticidas.",
            "Nutrientes foliares."
        ],
        correta: 1 // Segunda alternativa (índice 1)
    },
    {
        pergunta: "Qual desses problemas ambientais está diretamente ligado ao uso incorreto de agrotóxicos?",
        alternativas: [
            "Contaminação de lençóis freáticos e rios.",
            "Aumento imediato do nível do mar.",
            "Destruição da camada de ozônio por evaporação de água."
        ],
        correta: 0 // Primeira alternativa
    }
    // Você pode ir adicionando as outras 7 perguntas aqui seguindo o mesmo padrão!
];

// 2. Variáveis de controle do jogo
let perguntaAtual = 0;
let pontuacao = 0;

// 3. Seleção dos elementos do HTML
const btnPlay = document.getElementById('btn-play');
const telaInicio = document.getElementById('tela-inicio');
const telaJogo = document.getElementById('tela-jogo');

// Evento do botão Play para iniciar o jogo
btnPlay.addEventListener('click', () => {
    telaInicio.classList.add('oculto');
    telaJogo.classList.remove('oculto');
    carregarPergunta();
});

// 4. Função para desenhar a pergunta e as opções na tela
function carregarPergunta() {
    // Limpa a tela do jogo para colocar a nova pergunta
    telaJogo.innerHTML = "";

    // Se as perguntas acabaram, mostra o resultado final
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const dadosPergunta = perguntas[perguntaAtual];

    // Cria o título da pergunta
    const titulo = document.createElement('h2');
    titulo.innerText = `Pergunta ${perguntaAtual + 1}: ${dadosPergunta.pergunta}`;
    telaJogo.appendChild(titulo);

    // Cria os botões das alternativas
    dadosPergunta.alternativas.forEach((alternativa, indice) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.innerText = alternativa;
        botaoOpcao.classList.add('botao-opcao'); // Você pode estilizar essa classe no CSS depois
        
        // Quando o usuário clicar na resposta:
        botaoOpcao.addEventListener('click', () => verificarResposta(indice));
        
        telaJogo.appendChild(botaoOpcao);
    });
}

// 5. Função para checar se o usuário acertou
function verificarResposta(indiceSelecionado) {
    const respostaCorreta = perguntas[perguntaAtual].correta;

    if (indiceSelecionado === respostaCorreta) {
        pontuacao++;
        alert("Parabéns, você acertou! 🎉");
    } else {
        alert("Ops, resposta errada! ❌");
    }

    // Passa para a próxima pergunta e carrega na tela
    perguntaAtual++;
    carregarPergunta();
}

// 6. Função para mostrar a tela final de pontuação
function mostrarResultado() {
    telaJogo.innerHTML = `
        <h2>Fim de Jogo!</h2>
        <p>Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>
        <button onclick="reiniciarJogo()" class="botao-play">Jogar Novamente</button>
    `;
}

// 7. Função caso o jogador queira recomeçar
function reiniciarJogo() {
    perguntaAtual = 0;
    pontuacao = 0;
    carregarPergunta();
}