// Exercise 1 : Layout the board
document.addEventListener("DOMContentLoaded", function() {
  const squares = document.querySelectorAll("#board div");
  squares.forEach((square) => {
    square.classList.add("square");
  });
});

// Exercise 2 : Add an X or O to a square when clicked
let currentPlayer = "X";
let gameState = new Array(9).fill(null);

document.addEventListener("DOMContentLoaded", function() {
  const squares = document.querySelectorAll("#board div");
  squares.forEach((square, index) => {
    square.addEventListener("click", function() {
      if (gameState[index] === null) {
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
});

// Exercise 3 : Change the style when you move your mouse over a square
document.addEventListener("DOMContentLoaded", function() {
  const squares = document.querySelectorAll("#board div");
  squares.forEach((square) => {
    square.addEventListener("mouseover", function() {
      if (!square.classList.contains("X") && !square.classList.contains("O")) {
        square.classList.add("hover");
      }
    });
    square.addEventListener("mouseout", function() {
      square.classList.remove("hover");
    });
  });
});

// Exercise 4 : Check the winner and update the status
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (
      gameState[combination[0]] !== null &&
      gameState[combination[0]] === gameState[combination[1]] &&
      gameState[combination[0]] === gameState[combination[2]]
    ) {
      const status = document.getElementById("status");
      status.textContent = `Congratulations! ${gameState[combination[0]]} is the Winner!`;
      status.classList.add("you-won");
      return;
    }
  }
}


// Exercise 5 : Restart the Game
document.addEventListener("DOMContentLoaded", function(){
  const newGameButton = document.querySelector(".btn");
  newGameButton.addEventListener("click", function(){
    const squares = document.querySelectorAll("#board div");
    squares.forEach((square) =>{
      square.textContent = "";
      square.classList.remove("X", "O", "hover");
    });
    gameState = new Array(9).fill(null);
    currentPlayer = X;
    const status = document.getElementById("status");
    status.textContent = "Move your mouse over a square and then click it to play an X or an O.";
    status.classList.remove("you-won");
  });

});