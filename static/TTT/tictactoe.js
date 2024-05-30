let player = true;//torej to potezo ma player
let totalTurns = 0;
let playerWins = false;
let computerWins = false;
let draw = true;

let tiles = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

/*
//izpis arraya
tiles.forEach(row => {
	console.log(row.join(' '));
});
console.log("\n");*/

const title = document.getElementById('naslov');

// k kliknes na title neki nardi (fake gumb??)
title.addEventListener('click', RestartGame);

function RestartGame() {
	player = true;//torej to potezo ma player
	totalTurns = 0;
	playerWins = false;
	computerWins = false;
	draw = true;
	
	tiles = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];
	
	console.clear();
	updateImages();
	ResetGraphics();
	document.getElementById('match_result').innerHTML = "";
}

function PlayerSelectTile(i,j) {
	if(totalTurns>=9) {
		return;
	}
	
	if(playerWins || computerWins) {return;}
	
	//da ne overwritas sebe/enemyja
	if(tiles[i][j] == 1 || tiles[i][j] == 2) {
		return;
	}
	
	tiles[i][j] = 1;
	totalTurns++;
	updateImages();
	
	if(totalTurns >= 5) {
		CheckWin();
	}
	
	if(playerWins == false) {
		ComputerSelectTile();
	}
}

function ComputerSelectTile() {
	let i = 0,j = 0;
	
	if(playerWins || computerWins) {
		return;
	}
	
	if(totalTurns>=8) {
		return;
	}
	
    do {
        i = Math.floor(Math.random() * 3);
		j = Math.floor(Math.random() * 3);
    } while (tiles[i][j] !== 0);
	
	tiles[i][j] = 2;
	
	totalTurns++;
	
	updateImages();
	CheckWin();
}

//izpise zmagovalca/draw
function DisplayMatchResult() {
	
	const paragraph = document.getElementById('match_result');
    paragraph.style.color = 'black'; // Change 'red' to any color you want
	
	if (playerWins) {
		paragraph.style.color = 'green';
		document.getElementById('match_result').innerHTML = "Player wins!";
	}
	else if (computerWins) {
		paragraph.style.color = 'red';
		document.getElementById('match_result').innerHTML = "Enemy wins!";
	}
	else if (draw) {
		paragraph.style.color = 'black';
		document.getElementById('match_result').innerHTML = "Draw!";
	}
}

function CheckWin() {
	rowCheck();
	columnCheck();	
	diagonalCheck();
	
	if (playerWins || computerWins) {
		DisplayMatchResult();
	}
	else if (draw && totalTurns === 9) {
		DisplayMatchResult();
	}
}

function rowCheck() {
	//checks rows
	for(let i = 0; i < 3; ++i) {	
		//player wins
		if(tiles[i][0] == 1 && tiles[i][1] == 1 && tiles[i][2] == 1) {
			draw = false;
			playerWins = true;
			console.log("player wins\nrows\n");
			DisplayWin(i,0,i,1,i,2,true);
			return;
		}
		//computer wins
		else if(tiles[i][0] == 2 && tiles[i][1] == 2 && tiles[i][2] == 2) {
			draw = false;
			computerWins = true;
			console.log("computer wins\nrows\n");
			DisplayWin(i,0,i,1,i,2,false);
			
			return;
		}
	}
}

function columnCheck() {
	//checks the columns
	for(let j = 0; j < 3; ++j) {
		//player wins
		if(tiles[0][j] == 1 && tiles[1][j] == 1 && tiles[2][j] == 1) {
			draw = false;
			playerWins = true;
			console.log("player wins\ncolumns\n");
			DisplayWin(0,j,1,j,2,j,true);
			return;
		}
		//computer wins
		else if(tiles[0][j] == 2 && tiles[1][j] == 2 && tiles[2][j] == 2) {
			draw = false;
			computerWins = true;
			console.log("computer wins\ncolumns\n");
			DisplayWin(0,j,1,j,2,j,false);
			return;
		}
	}
}

function diagonalCheck() {
	//left diagonal
	//player wins
	if(tiles[0][0] == 1 && tiles[1][1] == 1 && tiles[2][2] == 1) {
		draw = false;
		playerWins = true;
		console.log("player wins\nleft diagonal\n");
		DisplayWin(0,0,1,1,2,2,true);
	}
	//computer wins
	else if(tiles[0][0] == 2 && tiles[1][1] == 2 && tiles[2][2] == 2) {
		draw = false;
		computerWins = true;
		console.log("computer wins\nleft diagonal\n");
		DisplayWin(0,0,1,1,2,2,false);
	}

	//right diagonal
	//player wins
	if(tiles[0][2] == 1 && tiles[1][1] == 1 && tiles[2][0] == 1) {
		draw = false;
		playerWins = true;
		console.log("player wins\nright diagonal\n");
		DisplayWin(0,2,1,1,2,0,true);
	}
	//computer wins
	else if(tiles[0][2] == 2 && tiles[1][1] == 2 && tiles[2][0] == 2) {
		draw = false;
		computerWins = true;
		console.log("computer wins\nright diagonal\n");
		DisplayWin(0,2,1,1,2,0,false);
	}
}

function updateImages() {
    for(let i = 0; i < 3; ++i) {
        for(let j = 0; j < 3; ++j) {
			let button = document.getElementById(('tile' + i) + j);

			// skippa ce je displayan win da ga ne overwritas return;
			if (button.style.backgroundImage.includes("-win.png")) {
				continue;//continue = return? 
			}
			
			//ce je player da O
			if (tiles[i][j] == 1) {
				button.style.backgroundImage = "url('assets/o.png')";
			}
			
			//enemy da X
			else if(tiles[i][j] == 2) {
				button.style.backgroundImage = "url('assets/x.png')";
			}
			
			else if(draw){
				button.style.backgroundImage = "url('assets/default.png')";
			}
            
            //highlights button when mouse is over
            button.addEventListener('mouseenter', function() {
			if (tiles[i][j] === 0) {
                    button.style.backgroundImage = "url('assets/selected.png')";
                }
            });
            
            //returns to default when mouse is not over anymore
            button.addEventListener('mouseleave', function() {
                if (tiles[i][j] === 0) {
                    button.style.backgroundImage = "url('assets/default.png')";
                }
            });
        }
    }
}

//sprejme 3 pare kjer se poveze, in bool player
function DisplayWin(i1,j1,i2,j2,i3,j3,Player) {
	console.log("ring ring");
	let t1 = document.getElementById(('tile' + i1) + j1);
	let t2 = document.getElementById(('tile' + i2) + j2);
	let t3 = document.getElementById(('tile' + i3) + j3);

	if(Player) {
		t1.style.backgroundImage = "url('assets/o-win.png')";
		t2.style.backgroundImage = "url('assets/o-win.png')";
		t3.style.backgroundImage = "url('assets/o-win.png')";
	}
	else {
		t1.style.backgroundImage = "url('assets/x-win.png')";
		t2.style.backgroundImage = "url('assets/x-win.png')";
		t3.style.backgroundImage = "url('assets/x-win.png')";
	}
}

function ResetGraphics() {
	for (let i = 0; i < 3; ++i) {
		for (let j = 0; j < 3; ++j) {
			let button = document.getElementById(('tile' + i) + j);
			button.style.backgroundImage = "url('assets/default.png')";
		}
	}
}