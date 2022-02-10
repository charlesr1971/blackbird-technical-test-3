
let player1 = 'o';
let player2 = 'x';
let thePlayer = player1;

let tictactoeCanvas = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let wdth;
let hght;

function setup() {
  createCanvas(400, 400);
  wdth = width / 3;
  hght = height / 3;
}

function matches(x, y, z) {
  return x == y && y == z && x != ' ';
}


function draw() { // library uses this method to render can
  background(255); // call library
  strokeWeight(4); // call library

  stroke(255, 204, 0);
  strokeWeight(4);
  line(wdth, 0, wdth, height); // call library
  line(wdth * 2, 0, wdth * 2, height);
  line(0, hght, width, hght);
  line(0, hght * 2, width, hght * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = wdth * i + wdth / 2;
      let y = hght * j + hght / 2;
      let shape = tictactoeCanvas[i][j];
      textSize(28);
      let r = wdth / 4;
      if (shape == player1) {
        noFill(); // call library
		stroke(0, 0, 0);
		strokeWeight(4);
        ellipse(x, y, r * 2); // call library
      }
	  else if (shape == player2) {
		stroke(255, 0, 0);
		strokeWeight(4);
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let outcome = resultCheck(); // lets check the results
  if (outcome != null) {
    noLoop(); // call library
    let outcomeP = createP(''); // call DOM library
    if (outcome == 'match') {
      outcomeP.html('No one wins!');
    }
	else{
      outcomeP.html(`${outcome} is the winner!`);
    }
  }
}

function resultCheck() {
  
  let victor = null;

  
  for (var a = 0; a < 3; a++) {
    if (matches(tictactoeCanvas[a][0], tictactoeCanvas[a][1], tictactoeCanvas[a][2])) {
      victor = tictactoeCanvas[a][0];
    }
  }

  for (var a = 0; a < 3; a++) {
    if (matches(tictactoeCanvas[0][a], tictactoeCanvas[1][a], tictactoeCanvas[2][a])) {
      victor = tictactoeCanvas[0][a];
    }
  }

  if (matches(tictactoeCanvas[0][0], tictactoeCanvas[1][1], tictactoeCanvas[2][2])) {
    victor = tictactoeCanvas[0][0];
  }
  if (matches(tictactoeCanvas[2][0], tictactoeCanvas[1][1], tictactoeCanvas[0][2])) {
    victor = tictactoeCanvas[2][0];
  }
  
  let emptySquares = 0;
  for (var a = 0; a < 3; a++) {
    for (let j = 0; j < 3; j++) {
      if (tictactoeCanvas[a][j] == ' ') {
        emptySquares++;
      }
    }
  }

  if (victor == null && emptySquares == 0) {
    return 'match';
  }
  else {
    return victor;
  }

}

function mousePressed() { // library uses this method to detect mouse click event handler
  let x = floor(mouseX / wdth);
  let y = floor(mouseY / hght);
  if (thePlayer == player1) {
    if (tictactoeCanvas[x][y] == ' ') {
      tictactoeCanvas[x][y] = player1;
    }
  } 
  else if (thePlayer == player2) {
    if (tictactoeCanvas[x][y] == ' ') {
      tictactoeCanvas[x][y] = player2;
    }
  }
}