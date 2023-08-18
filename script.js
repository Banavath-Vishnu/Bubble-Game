let score = 0;
let timer = 60;
let target = document.querySelector(".container");

let hitNumber;
let play = document.querySelector(".playBtn");

function containerNumbers() {
  let bubbles = "";

  for (let i = 1; i <= 220; i++) {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }

  document.querySelector(".container").innerHTML = bubbles;
}

function hitNumb() {
  hitNumber = Math.floor(Math.random() * 10 + 1);
  document.getElementById("hitNum").value = hitNumber;
}

target.addEventListener("click", clickHandler);

function clickHandler(e) {
  let tarVal = e.target.textContent;
  if (hitNumber == tarVal) {
    bubSound();
    scoreReader();
    hitNumb();
    containerNumbers();
  } else if (tarVal > 10) {
    e.preventDefault();
  } else {
    bubSound2();
    scoreReducer();
    containerNumbers();
  }
}

function scoreReader() {
  score += 1;
  document.getElementById("score").value = score;
}

function scoreReducer() {
  score -= 1;
  document.getElementById("score").value = score;
}

let timeInterval = setInterval(() => {
  if (timer >= 0) {
    document.getElementById("timer").value = timer;
    timer--;
  } else {
    target.innerHTML = `<div class="Game-Over"><p>Game over</p>
    <p class ="scoreP">Your Score is : ${score}</p> 
    <button class = "playBtn">Play Again</button>`;
    clearInterval(timeInterval);
    gameOver();
    resetAll();
  }
}, 1000);

function resetAll() {
  target.removeEventListener("click", clickHandler);
  event();
}

function event() {
  target.querySelector(".playBtn").addEventListener("click", () => {
    location.reload();
  });
}

function bubSound() {
  let BubSound = new Audio("sounds/sound-of-a-drop-of-water-131023.mp3");
  BubSound.play();
}

function bubSound2() {
  let BubSound2 = new Audio("sounds/mixkit-arcade-retro-run-sound-220.wav");
  BubSound2.play();
}

function gameOver() {
  let gameover = new Audio("sounds/ghost-says-the-words-game-over-32172.mp3");
  gameover.play();
}

hitNumb();
containerNumbers();
