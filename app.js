let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";
let gameOver = false;

function drawBoard() {
  let table = document.getElementById("board");
  let html = "";

  for (let i = 0; i < board.length; i++) {
    html += "<tr>";

    for (let j = 0; j < board[i].length; j++) {
      let className = "";

      if (board[i][j] === "X") {
        className = "x-cell";
      } else if (board[i][j] === "O") {
        className = "o-cell";
      }

      html += `<td class="${className}" onclick="makeMove(${i}, ${j})">${board[i][j]}</td>`;
    }

    html += "</tr>";
  }

  table.innerHTML = html;
}

function makeMove(row, col) {
  if (gameOver === true) {
    return;
  }

  if (board[row][col] !== "") {
    return;
  }

  board[row][col] = currentPlayer;
  drawBoard();

  let winner = checkWinner();

  if (winner !== "") {
    document.getElementById("turnText").textContent = "Game Over";
    document.getElementById("message").textContent = currentPlayer + " wins!";
    showWinLine(winner);
    gameOver = true;
    return;
  }

  if (checkTie() === true) {
    document.getElementById("turnText").textContent = "Game Over";
    document.getElementById("message").textContent = "It's a tie!";
    gameOver = true;
    return;
  }

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  document.getElementById("turnText").textContent =
    "Current Turn: " + currentPlayer;
}

function checkWinner() {
  // row 1
  if (board[0][0] !== "" && board[0][0] === board[0][1] && board[0][1] === board[0][2]
  ) {
    return "row1";
  }

  // row 2
  if (board[1][0] !== "" && board[1][0] === board[1][1] && board[1][1] === board[1][2]
  ) {
    return "row2";
  }

  // row 3
  if (board[2][0] !== "" && board[2][0] === board[2][1] && board[2][1] === board[2][2]
  ) {
    return "row3";
  }

  // column 1
  if ( board[0][0] !== "" && board[0][0] === board[1][0] && board[1][0] === board[2][0]
  ) {
    return "col1";
  }

  // column 2
  if (board[0][1] !== "" && board[0][1] === board[1][1] && board[1][1] === board[2][1]
  ) {
    return "col2";
  }

  // column 3
  if (board[0][2] !== "" && board[0][2] === board[1][2] && board[1][2] === board[2][2]
  ) {
    return "col3";
  }

  // diagonal 1
  if (board[0][0] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]
  ) {
    return "diag1";
  }

  // diagonal 2
  if (board[0][2] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]
  ) {
    return "diag2";
  }

  return "";
}

function checkTie() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }

  return true;
}

function showWinLine(winType) {
  let line = document.getElementById("winLine");

  line.style.display = "block";

  if (winType === "row1") {
    line.style.width = "330px";
    line.style.height = "8px";
    line.style.left = "15px";
    line.style.top = "60px";
    line.style.transform = "rotate(0deg)";
  }

  if (winType === "row2") {
    line.style.width = "330px";
    line.style.height = "8px";
    line.style.left = "15px";
    line.style.top = "185px";
    line.style.transform = "rotate(0deg)";
  }

  if (winType === "row3") {
    line.style.width = "330px";
    line.style.height = "8px";
    line.style.left = "15px";
    line.style.top = "310px";
    line.style.transform = "rotate(0deg)";
  }

  if (winType === "col1") {
    line.style.width = "330px";
    line.style.height = "8px";
    line.style.left = "-95px";
    line.style.top = "185px";
    line.style.transform = "rotate(90deg)";
  }

  if (winType === "col2") {
    line.style.width = "330px";
    line.style.height = "8px";
    line.style.left = "15px";
    line.style.top = "185px";
    line.style.transform = "rotate(90deg)";
  }

  if (winType === "col3") {
    line.style.width = "330px";
    line.style.height = "8px";
    line.style.left = "125px";
    line.style.top = "185px";
    line.style.transform = "rotate(90deg)";
  }

  if (winType === "diag1") {
    line.style.width = "460px";
    line.style.height = "8px";
    line.style.left = "-50px";
    line.style.top = "185px";
    line.style.transform = "rotate(45deg)";
  }

  if (winType === "diag2") {
    line.style.width = "460px";
    line.style.height = "8px";
    line.style.left = "-50px";
    line.style.top = "185px";
    line.style.transform = "rotate(-45deg)";
  }
}

function resetGame() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  currentPlayer = "X";
  gameOver = false;

  document.getElementById("turnText").textContent = "Current Turn: X";
  document.getElementById("message").textContent = "";

  let line = document.getElementById("winLine");
  line.style.display = "none";
  line.style.width = "0";
  line.style.left = "0";
  line.style.top = "0";
  line.style.transform = "rotate(0deg)";

  drawBoard();
}

drawBoard();
