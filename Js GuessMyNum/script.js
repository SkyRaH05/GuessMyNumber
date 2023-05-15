"use strict";
//.................. Generate Random number........................
let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);

//.................Functionality for ClickButton....................
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  let newScore = Number(document.querySelector(".score").textContent);

  let newHighScore = Number(document.querySelector(".highscore").textContent);

  // console.log(newScore);
  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number!";
    newScore--;
    document.querySelector(".score").textContent = newScore;
  } else if (guess === number) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (newScore > newHighScore) {
      newHighScore = newScore;
      document.querySelector(".highscore").textContent = newHighScore;
    }
  } else if (guess !== number) {
    if (newScore > 1) {
      document.querySelector(".message").textContent =
        guess > number ? "📈 Too High!" : "📉 Too Low! ";
      newScore--;
      document.querySelector(".score").textContent = newScore;
    } else {
      document.querySelector(".message").textContent = "☹️ You Lost The Game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF6969";
    }
  }

  // else if (guess > number) {
  //   if (newScore > 1) {
  //     document.querySelector(".message").textContent =
  //       " ? 📈 Too High! : 📉 Too Low! ";
  //     newScore--;
  //     document.querySelector(".score").textContent = newScore;
  //   } else {
  //     document.querySelector(".message").textContent = "☹️ You Lost The Game!";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#FF6969";
  //   }
  // }
  //  else if (guess < number) {
  //   if (newScore > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low!";
  //     newScore--;
  //     document.querySelector(".score").textContent = newScore;
  //   } else {
  //     document.querySelector(".message").textContent = "☹️ You Lost The Game!";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#FF6969";
  //   }
  // }
});

//....................Functionality of AgainButton.....................
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#2a2f4f";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "🤔 Start guessing...";
  document.querySelector(".guess").value = " ";
  // console.log(number);
});
