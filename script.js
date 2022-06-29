"use strict";

let num = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#input-number").value);

  // when there is no input

  if (!guess) {
    document.querySelector(".guess").textContent = "⛔ No input";
  }

  //when guess is not equal to number
  else if (guess !== num) {
    if (score > 1) {
      document.querySelector(".guess").textContent =
        guess > num ? "⬆⬆ Too high" : "⬆⬆ Too Low";
      score--;
      document.querySelector(".numb").textContent = score;
    } else {
      document.querySelector(".guess").textContent = "You lose the Game";
      document.querySelector(".numb").textContent = 0;
    }
  }

  // when guess is equal to num
  else if (guess === num) {
    document.querySelector(".guess").textContent = "🍹 Correct Number ";
    document.querySelector("body").style.backgroundColor = "#816797";
    document.querySelector(".question").textContent = num;
    highscore = Number(document.querySelector(".numb1").textContent);

    if (score > highscore) {
      document.querySelector(".numb1").textContent = score;
    }
  }
});

// working of again button

document.querySelector(".tryagain").addEventListener("click", function () {
  num = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").textContent = "Start guessing🤔";
  document.querySelector(".numb").textContent = score;
  document.querySelector(".question").textContent = "?";
  document.querySelector("#input-number").value = " ";
});
