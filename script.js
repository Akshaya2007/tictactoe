document.addEventListener("DOMContentLoaded", function() {
  // get elements
  var gameBoard = document.getElementById("game-board");

  // initialize variables
  var currentPlayer = "X";
  var moves = 0;

  // add event listener to game board
  gameBoard.addEventListener("click", function(event) {
    // get the clicked cell
    var cell = event.target;

    // check if the cell is empty
    if (cell.innerHTML === "") {
      // update the cell with the current player's symbol
      cell.innerHTML = currentPlayer;

      // check for a win
      if (checkWin()) {
        alert(currentPlayer + " wins!");
        reset();
      } else {
        // switch players
        if (currentPlayer === "X") {
          currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }

        // increment moves counter
        moves++;

        // check for a tie
        if (moves === 9) {
          alert("Tie game!");
          reset();
        }
      }
    }
  });

  function checkWin() {
    // check rows
    for (var i = 0; i < 9; i += 3) {
      if (document.getElementById(i.toString()).innerHTML !== "" &&
          document.getElementById(i.toString()).innerHTML === document.getElementById((i+1).toString()).innerHTML &&
          document.getElementById((i+1).toString()).innerHTML === document.getElementById((i+2).toString()).innerHTML) {
        return true;
      }
    }

    // check columns
    for (var i = 0; i < 3; i++) {
      if (document.getElementById(i.toString()).innerHTML !== "" &&
          document.getElementById(i.toString()).innerHTML === document.getElementById((i+3).toString()).innerHTML &&
          document.getElementById((i+3).toString()).innerHTML === document.getElementById((i+6).toString()).innerHTML) {
        return true;
      }
    }

    // check diagonals
    if (document.getElementById("0").innerHTML !== "" &&
        document.getElementById("0").innerHTML === document.getElementById("4").innerHTML &&
