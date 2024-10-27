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

