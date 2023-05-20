const player = document.getElementById("player-symbol");
const computer = document.getElementById("computer-symbol");

const box1 = document.getElementById("btn1");
const box2 = document.getElementById("btn2");
const box3 = document.getElementById("btn3");
const box4 = document.getElementById("btn4");
const box5 = document.getElementById("btn5");
const box6 = document.getElementById("btn6");
const box7 = document.getElementById("btn7");
const box8 = document.getElementById("btn8");
const box9 = document.getElementById("btn9");

const won = document.getElementById("turn");

const tableSpots = [
  box1, box2, box3,
  box4, box5, box6,
  box7, box8, box9
];

let randPlayerTurn = Math.floor(Math.random() * 2) + 1

const drawRandSymbols = () => {
  const symbols = ['X', 'O'];
  const randSymbols = [];
  randSymbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
  randSymbols[0] === 'X' ? randSymbols.push('O') : randSymbols.push('X');
  return randSymbols;
}

const randDraw = drawRandSymbols();
player.innerText = randDraw[0];
computer.innerText = randDraw[1];

const moveCheck = (passBtn1, passBtn2, passBtn3, symbol) =>
(passBtn1.innerText === symbol && passBtn2.innerText === symbol
  && passBtn3.innerText === symbol);

const disabledAllBtns = (wonPlayer) => {
  won.innerText = `${wonPlayer === 1 ? 'Player' : 'Computer'} Wins!`;

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

const computerMove = () => {
  if (tableSpots.length === 0)
    return;

  const index = Math.floor(Math.random() * tableSpots.length);
  const move = tableSpots[index];
  tableSpots.splice(index, 1);
  move.innerText = computer.innerText;
  move.disabled = true;
  move.style.color = "blue";
  validMoveCheck(move.innerText);
  randPlayerTurn = 1;
}


if (randPlayerTurn === 2) {
  computerMove();
}

// Update the table on clicks
const btnClick = (ele) => {
  ele.innerText = player.innerText;
  ele.style.color = "red";
  ele.disabled = true;
  tableSpots.splice(tableSpots.indexOf(ele), 1);
  validMoveCheck(player.innerText);
  randPlayerTurn = 2;
  return true;
}

box1.onclick = () => btnClick(box1) === true && computerMove();
box2.onclick = () => btnClick(box2) === true && computerMove();
box3.onclick = () => btnClick(box3) === true && computerMove();

box4.onclick = () => btnClick(box4) === true && computerMove();
box5.onclick = () => btnClick(box5) === true && computerMove();
box6.onclick = () => btnClick(box6) === true && computerMove();

box7.onclick = () => btnClick(box7) === true && computerMove();
box8.onclick = () => btnClick(box8) === true && computerMove();
box9.onclick = () => btnClick(box9) === true && computerMove();
