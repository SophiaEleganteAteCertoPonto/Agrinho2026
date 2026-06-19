const playBtn = document.getElementById("play-btn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

// 📌 Perguntas
const questions = [
  {
    question: "O que são agrotóxicos?",
    answers: [
      { text: "Produtos usados para matar pragas nas plantações", correct: true },
      { text: "Fertilizantes naturais", correct: false },
      { text: "Água usada na irrigação", correct: false }
    ]
  },
  {
    question: "Qual o principal objetivo dos agrotóxicos?",
    answers: [
      { text: "Aumentar a poluição", correct: false },
      { text: "Controlar pragas e doenças agrícolas", correct: true },
      { text: "Aumentar o preço dos alimentos", correct: false }
    ]
  },
  {
    question: "Agrotóxicos podem afetar a saúde humana?",
    answers: [
      { text: "Sim", correct: true },
      { text: "Não", correct: false },
      { text: "Apenas animais", correct: false }
    ]
  },
  {
    question: "Qual é uma alternativa mais sustentável?",
    answers: [
      { text: "Uso excessivo de veneno", correct: false },
      { text: "Controle biológico de pragas", correct: true },
      { text: "Queimadas", correct: false }
    ]
  },
  {
    question: "O uso excessivo de agrotóxicos pode causar:",
    answers: [
      { text: "Contaminação do solo e da água", correct: true },
      { text: "Aumento da biodiversidade", correct: false },
      { text: "Ar mais limpo", correct: false }
    ]
  },
  {
    question: "Quem mais sofre com a exposição aos agrotóxicos?",
    answers: [
      { text: "Consumidores apenas", correct: false },
      { text: "Trabalhadores rurais", correct: true },
      { text: "Apenas máquinas agrícolas", correct: false }
    ]
  },
  {
    question: "Agrotóxicos podem entrar no corpo humano por:",
    answers: [
      { text: "Alimentação contaminada", correct: true },
      { text: "Somente pelo ar", correct: false },
      { text: "Somente pela água do mar", correct: false }
    ]
  },
  {
    question: "O uso de agrotóxicos deve ser:",
    answers: [
      { text: "Descontrolado", correct: false },
      { text: "Controlado e regulamentado", correct: true },
      { text: "Proibido apenas em cidades", correct: false }
    ]
  },
  {
    question: "Qual problema ambiental pode ocorrer?",
    answers: [
      { text: "Desertificação e perda de solo fértil", correct: true },
      { text: "Aumento de florestas", correct: false },
      { text: "Mais chuva", correct: false }
    ]
  },
  {
    question: "Agrotóxicos são também chamados de:",
    answers: [
      { text: "Defensivos agrícolas", correct: true },
      { text: "Vitaminas do solo", correct: false },
      { text: "Energia renovável", correct: false }
    ]
  }
];

// 🎮 iniciar jogo
playBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  showQuestion();
});

// 📌 mostrar pergunta
function showQuestion() {
  resetState();

  let q = questions[currentQuestion];
  questionEl.textContent = q.question;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;

    btn.addEventListener("click", () => {
      if (answer.correct) {
        feedbackEl.textContent = "✅ Correto!";
        feedbackEl.className = "correct";
        score++;
      } else {
        feedbackEl.textContent = "❌ Errado!";
        feedbackEl.className = "wrong";
      }

      scoreEl.textContent = "Pontuação: " + score;

      setTimeout(nextQuestion, 1000);
    });

    answersEl.appendChild(btn);
  });
}

// limpar tela
function resetState() {
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";
}

// próxima pergunta
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Fim do quiz!";
    answersEl.innerHTML = "";
    feedbackEl.textContent = "Sua pontuação final: " + score + " / 10";
  }
}