const player1 = document.getElementById("player1-symbol");
const player2 = document.getElementById("player2-symbol");

const box1 = document.getElementById("btn1");
const box2 = document.getElementById("btn2");
const box3 = document.getElementById("btn3");
const box4 = document.getElementById("btn4");
const box5 = document.getElementById("btn5");
const box6 = document.getElementById("btn6");
const box7 = document.getElementById("btn7");
const box8 = document.getElementById("btn8");
const box9 = document.getElementById("btn9");

const turn = document.getElementById("turn");

let randPlayerTurn = Math.floor(Math.random() * 2) + 1
turn.textContent = `Player ${randPlayerTurn}`;

const drawRandSymbols = () => {
  const symbols = ['X', 'O'];
  const randSymbols = [];
  randSymbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
  randSymbols[0] === 'X' ? randSymbols.push('O') : randSymbols.push('X');
  return randSymbols;
}
const randDraw = drawRandSymbols();
player1.textContent = randDraw[0];
player2.textContent = randDraw[1];

const disabledAllBtns = (wonPlayer) => {
  document.getElementById("turnText").textContent = `Player ${wonPlayer === 1 ? 2 : 1} Wins!`;
  turn.textContent = "";
  box1.disabled = true;
  box2.disabled = true;
  box3.disabled = true;
  box4.disabled = true;
  box5.disabled = true;
  box6.disabled = true;
  box7.disabled = true;
  box8.disabled = true;
  box9.disabled = true;
}

// 8 possible way of winning the game
const moveCheck = (passBtn1, passBtn2, passBtn3, symbol) =>
  passBtn1.textContent === symbol &&
  passBtn2.textContent === symbol &&
  passBtn3.textContent === symbol;


const validMoveCheck = (player) => {
  // check row 1
  moveCheck(btn1, btn2, btn3, player) && disabledAllBtns(randPlayerTurn);
  // check row 2
  moveCheck(btn4, btn5, btn6, player) && disabledAllBtns(randPlayerTurn);
  // check row 3
  moveCheck(btn7, btn8, btn9, player) && disabledAllBtns(randPlayerTurn);

  // check column 1
  moveCheck(btn1, btn4, btn7, player) && disabledAllBtns(randPlayerTurn);
  // check column 2
  moveCheck(btn2, btn5, btn8, player) && disabledAllBtns(randPlayerTurn);
  // check column 3
  moveCheck(btn3, btn6, btn9, player) && disabledAllBtns(randPlayerTurn);

  // check diagonal 1
  moveCheck(btn1, btn5, btn9, player) && disabledAllBtns(randPlayerTurn);
  // check diagonal 2
  moveCheck(btn3, btn5, btn7, player) && disabledAllBtns(randPlayerTurn);
}
// Update the table on clicks
const btnClick = (ele) => {
  if (randPlayerTurn === 1) {
    ele.textContent = player1.textContent;
    randPlayerTurn = 2;
    turn.textContent = `Player ${randPlayerTurn}`;
    ele.style.color = "red";
    validMoveCheck(player1.textContent);
  }
  else {
    ele.textContent = player2.textContent;
    randPlayerTurn = 1;
    turn.textContent = `Player ${randPlayerTurn}`;
    ele.style.color = "blue";
    validMoveCheck(player2.textContent);
  }
  ele.disabled = true;
}

box1.onclick = () => btnClick(box1);
box2.onclick = () => btnClick(box2);
box3.onclick = () => btnClick(box3);

box4.onclick = () => btnClick(box4);
box5.onclick = () => btnClick(box5);
box6.onclick = () => btnClick(box6);

box7.onclick = () => btnClick(box7);
box8.onclick = () => btnClick(box8);
box9.onclick = () => btnClick(box9);
