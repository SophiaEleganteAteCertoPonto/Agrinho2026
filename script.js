const playBtn = document.getElementById("play-btn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");

playBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

function responder(correta) {
  if (correta) {
    alert("✅ Resposta correta!");
  } else {
    alert("❌ Resposta errada!");
  }
}