let gridSize = 40;
let gridMargin = 10;
let gridSpace = 3;
let canvasWidth = COLS * gridSize + 2 * gridMargin + (COLS - 1) * gridSpace;
let canvasHeight = ROWS * gridSize + 2 * gridMargin + (COLS - 1) * gridSpace;

let colors = [
    "#1bc6a4",
    "#7452c4",
    "#af0fe0",
    "#e04c67",
    "#00ff71"
];

function translateXY(r,c){
    let x = c * (gridSize + gridSpace) + gridSize / 2 + gridMargin;
    let y = r * (gridSize + gridSpace) + gridSize / 2 + gridMargin;
    return {
        x:x, y:y
    }; 
}

function drawPlayer(p){

    stroke("white");
    let w = Math.sin(frameCount / 3) * 4 + 3;
    strokeWeight(w);
   
    let coord = translateXY(p.r,p.c);
 
    fill(colors[p.colorIndex]);
    ellipse(coord.x,coord.y,gridSize /2);
}

function drawBoard(){
    noStroke();
    // LOOP THROUGH THE BOARD
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
           
            let coord = translateXY(r,c);

            let cellValue = game.board[r][c];
            fill(colors[cellValue]);
           ellipse(coord.x,coord.y,gridSize /2);
        }
    }
}