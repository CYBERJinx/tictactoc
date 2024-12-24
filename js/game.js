document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const startScreen = document.getElementById("start-screen");
  
    // Handle start button click to start the game
    startButton.addEventListener("click", () => {
      startScreen.classList.add("hidden"); // Hide start screen
      createGameScreen(); // Create and display the game screen
    });
  
    let currentPlayer = "X"; // Player always starts as "X"
    let boardState = Array(9).fill(""); // Track the board state
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal from top-left
      [2, 4, 6], // Diagonal from top-right
    ];
  
    function createGameScreen() {
      // Create the game screen container
      const gameScreen = document.createElement("div");
      gameScreen.id = "game-screen";
  
      // Create the game board
      const gameBoard = document.createElement("div");
      gameBoard.id = "game-board";
      gameBoard.style.display = "grid";
      gameBoard.style.gridTemplateRows = "repeat(3, 1fr)";
      gameBoard.style.gridTemplateColumns = "repeat(3, 1fr)";
      gameBoard.style.gap = "5px";
  
      // Create cells for the game board
      for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = "80px";
        cell.style.height = "80px";
        cell.style.backgroundColor = "#ddd";
        cell.style.borderRadius = "5px";
        cell.style.display = "flex";
        cell.style.justifyContent = "center";
        cell.style.alignItems = "center";
        cell.style.fontSize = "2rem";
        cell.style.cursor = "pointer";
        cell.addEventListener("click", handleCellClick);
        gameBoard.appendChild(cell);
      }
  
      // Create the restart button
      const restartButton = document.createElement("button");
      restartButton.id = "restart-button";
      restartButton.textContent = "Restart Game";
      restartButton.addEventListener("click", restartGame);
  
      // Create the result message container
      const resultMessage = document.createElement("div");
      resultMessage.id = "result-message";
      resultMessage.style.fontSize = "1.5rem";
      resultMessage.style.fontWeight = "bold";
      resultMessage.style.textAlign = "center";
      resultMessage.style.marginTop = "20px";
  
      // Append the game board, result message, and restart button to the game screen
      gameScreen.appendChild(gameBoard);
      gameScreen.appendChild(resultMessage); // Add result message here
      gameScreen.appendChild(restartButton);
  
      // Append the game screen to the body
      document.body.appendChild(gameScreen);
    }
  
    // Handle cell click by the player
    function handleCellClick(event) {
      const cell = event.target;
      const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
  
      // Proceed only if the cell is empty and there's no winner yet
      if (!cell.textContent && !checkWinner()) {
        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === "X" ? "blue" : "red"; // Add color
        boardState[cellIndex] = currentPlayer; // Update board state
  
        // Check for a winner
        const winner = checkWinner();
        if (winner) {
          displayResult(`${winner} wins!`);
          highlightWinningCells(winner); // Highlight the winning cells
          return; // End the game
        }
  
        // Check for a draw
        if (!boardState.includes("")) {
          displayResult("It's a draw!");
          return; // End the game
        }
  
        // Switch player and let the bot play if the current player is "O"
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (currentPlayer === "O") {
          setTimeout(botMove, 500); // Delay the bot's move for realism
        }
      }
    }
  
    // Simple bot move (random empty cell)
    function botMove() {
      const emptyCells = boardState.map((value, index) => value === "" ? index : null).filter(index => index !== null);
      const randomCellIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const botCell = document.querySelectorAll(".cell")[randomCellIndex];
  
      // Bot makes its move
      botCell.textContent = "O";
      botCell.style.color = "red"; // Bot's color
      boardState[randomCellIndex] = "O"; // Update the board state
  
      // Check for a winner
      const winner = checkWinner();
      if (winner) {
        displayResult(`${winner} wins!`);
        highlightWinningCells(winner); // Highlight the winning cells
        return; // End the game
      }
  
      // Check for a draw
      if (!boardState.includes("")) {
        displayResult("It's a draw!");
        return; // End the game
      }
  
      // Switch player back to "X"
      currentPlayer = "X";
    }
  
    // Check if there is a winner
    function checkWinner() {
      for (const [a, b, c] of winningCombinations) {
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
          return boardState[a]; // Return the winner ("X" or "O")
        }
      }
      return null; // No winner
    }
  
    // Display the result message on the screen
    function displayResult(message) {
      const resultMessage = document.getElementById("result-message");
      resultMessage.textContent = message; // Display winner or draw message
    }
  
    // Highlight the winning cells with a red border
    function highlightWinningCells(winner) {
      for (const [a, b, c] of winningCombinations) {
        if (boardState[a] === winner && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
          document.querySelectorAll(".cell")[a].style.border = "5px solid red";
          document.querySelectorAll(".cell")[b].style.border = "5px solid red";
          document.querySelectorAll(".cell")[c].style.border = "5px solid red";
        }
      }
    }
  
    // Restart the game
    function restartGame() {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((cell) => {
        cell.textContent = "";
        cell.style.color = ""; // Clear color
        cell.style.border = ""; // Clear border
      });
      boardState.fill(""); // Clear board state
      currentPlayer = "X"; // Reset to player "X"
      displayResult(""); // Clear result message
    }
  });
  