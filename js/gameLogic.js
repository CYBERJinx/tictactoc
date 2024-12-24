document.addEventListener("DOMContentLoaded", () => {
  // ... (Your existing code)

  let firstMove = Math.random() < 0.5; // Randomly decide who goes first
  let playerMoves = 0; // To keep track of player moves

  function botMove() {
    playerMoves++;

    // ... (Your existing bot move logic)

    // If it's the bot's first move, make a random move
    if (playerMoves === 1 && !firstMove) {
      let emptyCells = [];
      for (let i = 0; i < 9; i++) {
        if (boardState[i] === "") {
          emptyCells.push(i);
        }
      }
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      makeMove(emptyCells[randomIndex], "O");
      return;
    }
  }

  // ... (Rest of your code)
});