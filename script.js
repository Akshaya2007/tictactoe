document.addEventListener("DOMContentLoaded", function() {
  // get elements
  var startButton = document.getElementById("start-button");
  var resetButton = document.getElementById("reset-button");
  var homePage = document.getElementById("home-page");
  var gamePage = document.getElementById("game-page");
  var gameBoard = document.getElementById("game-board");

  // add event listeners
  startButton.addEventListener("click", function() {
    homePage.style.display = "none";
    gamePage.style.display = "block";
  });

  resetButton.addEventListener("click", function() {
    // reset the game board
    for (var i = 0; i < 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
    }

    // show the game board
    gamePage.style.display = "block";
  });

  gameBoard.addEventListener("click", function(event) {
    // get the clicked cell
    var cell = event.target;

    // check if the cell is empty
    if (cell.innerHTML === "") {
      // get the current player
      var currentPlayer = document.getElementById("current-player").innerHTML;

      // update the cell with the current player's symbol
      cell.innerHTML = currentPlayer;

      // check for a win
      if (checkWin()) {
        alert(currentPlayer + " wins!");
        gamePage.style.display = "none";
      } else {
        // switch players
        if (currentPlayer === "X") {
          document.getElementById("current-player").innerHTML = "O";
        } else {
          document.getElementById("current-player").
