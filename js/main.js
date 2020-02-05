/*
1) Board logic - code of every sq position 0-8
2) Possible characters options for each sq position (X,0,Null)
3) Combinations that create WINS
4) What a TIE means
5) Turns: X goes first. 0 goes second.
6) CLICK starts the game (start)
7) Characters show up on the board after PLAYER clicks over the selected position.
8) WHen a PLAYER picks a WinningCombinations => Game ends, player WINS, Message Shows.
9) When NO WinningCombinations were selected => Game ends, Tie Result, Message Shows.


/*------Constants------*/
var lookup = {
'1': 'X',
'-1': '0',
'null': 'null'
};

var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]; 

/*------Variables (state)------*/
let board;
let winner;

// Variables might include (board/turn/winner)


/*------Cached Element References------*/
var squares = document.querySelectorAll('div');
var textContent = document.querySelector('message'); 


// You might choose to put your game status here

/*------Event Listeners------*/
document.getElementById('board').addEventListener('click', onClick);
// document.querySelector('section.board').addEventListener('click', onClick);

/*------Functions------*/
initialize();

function onClick(evt) {
  console.log("test")
    var idx = parseInt(evt.target.id.replace('sq',''));
    if (board[idx] !== null || winner) return;
    board[idx] = turn;
    getElementById(evt.target.id)
    turn *= -1; 
    winner = getWinner();
    render(); 
  
    };
function getWinner() {
 for (var i = 0; i < winningCombinations.length; i++) {
   if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
   if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
   if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
   if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
   if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
   if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
   if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
   if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
   if (board.includes(null)) return null;
   return 'draw';
 };
};
 

function render (){

};
function render(idx) {
board.forEach(function(sq, idx) {
});
if (winner === 'draw') {
textContent = "This is a tie";
} else if (winner) {
textContent = "WINNER!";
}  else {
textContent = "Give it another try";  
}
};

function initialize() {
    board = [null,null,null,null,null,null,null,null,null];
    turn = 1;
    winner = null;
    render();
};


// Some functions you might choose to use:

// Initialization function:
//check if game is over (vertical)

// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is
