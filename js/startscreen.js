document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const startScreen = document.getElementById("start-screen");
  const gameScreen = document.getElementById("game-screen");
  const backgroundMusic = document.getElementById("background-music");
  const soundControl = document.getElementById("sound-control");
  const soundToggleButton = document.getElementById("sound-toggle");

  // Handle start button click
  startButton.addEventListener("click", () => {
    // Hide start screen
    startScreen.classList.add("hidden");
    // Show game screen
    gameScreen.classList.remove("hidden");
    // Change background
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "#000";
    // Play background music
    backgroundMusic.play();
    // Show sound control
    soundControl.classList.remove("hidden");
  });

  // Handle sound toggle
  soundToggleButton.addEventListener("click", () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      soundToggleButton.textContent = "Sound: ON";
    } else {
      backgroundMusic.pause();
      soundToggleButton.textContent = "Sound: OFF";
    }
  });
});
