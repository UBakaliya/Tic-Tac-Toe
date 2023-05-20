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

const turn = document.getElementById("turn");

let randPlayerTurn = Math.floor(Math.random() * 2) + 1
turn.textContent = randPlayerTurn === 1 ? "Player" : "Computer";

const drawRandSymbols = () => {
    const symbols = ['X', 'O'];
    const randSymbols = [];
    randSymbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
    randSymbols[0] === 'X' ? randSymbols.push('O') : randSymbols.push('X');
    return randSymbols;
}
const randDraw = drawRandSymbols();
player.textContent = randDraw[0];
computer.textContent = randDraw[1];
