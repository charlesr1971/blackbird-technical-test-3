
let player1 = 'o';
let player2 = 'x';
let thePlayer = player1;

let tictactoeCanvas = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
}

function matches(a, b, c) {
  return a == b && b == c && a != ' ';
}


function draw() { // library uses this method to render can
  background(255); // call library
  strokeWeight(4); // call library

  stroke(255, 204, 0);
  strokeWeight(4);
  line(w, 0, w, height); // call library
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let shape = tictactoeCanvas[i][j];
      textSize(28);
      let r = w / 4;
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
    if (outcome == 'draw') {
      outcomeP.html('No one wins!');
    }
	else{
      outcomeP.html(`${outcome} is the winner!`);
    }
  }
}

function resultCheck() {
  
  let victor = null;

  
  for (let i = 0; i < 3; i++) {
    if (matches(tictactoeCanvas[i][0], tictactoeCanvas[i][1], tictactoeCanvas[i][2])) {
      victor = tictactoeCanvas[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (matches(tictactoeCanvas[0][i], tictactoeCanvas[1][i], tictactoeCanvas[2][i])) {
      victor = tictactoeCanvas[0][i];
    }
  }

  if (matches(tictactoeCanvas[0][0], tictactoeCanvas[1][1], tictactoeCanvas[2][2])) {
    victor = tictactoeCanvas[0][0];
  }
  if (matches(tictactoeCanvas[2][0], tictactoeCanvas[1][1], tictactoeCanvas[0][2])) {
    victor = tictactoeCanvas[2][0];
  }
  
  let emptySquares = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tictactoeCanvas[i][j] == ' ') {
        emptySquares++;
      }
    }
  }

  if (victor == null && emptySquares == 0) {
    return 'draw';
  }
  else {
    return victor;
  }

}

function mousePressed() { // library uses this method to detect mouse click event handler
  let x = floor(mouseX / w);
  let y = floor(mouseY / h);
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