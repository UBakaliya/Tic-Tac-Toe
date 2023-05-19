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

const drawRandSymbols = () => {
  const symbols = ['X', 'O'];
  const randSymbols = [];
  randSymbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
  randSymbols[0] === 'X' ? randSymbols.push('O') : randSymbols.push('X');
  return randSymbols;
}
const randSymbols = drawRandSymbols();
player1.textContent = randSymbols[0];
player2.textContent = randSymbols[1];

turn.textContent = `Player ${randPlayerTurn}`;

const btnClick = (ele) => {
  if (randPlayerTurn === 1) {
    ele.textContent = player1.textContent;
    randPlayerTurn = 2;
    turn.textContent = `Player ${randPlayerTurn}`;
    ele.style.color = "red";
  }
  else {
    ele.textContent = player2.textContent;
    randPlayerTurn = 1;
    turn.textContent = `Player ${randPlayerTurn}`;
    ele.style.color = "blue";
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


