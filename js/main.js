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
'-1': 'O',
'null': 'null'
};

// var winningCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]; 

/*------Variables (state)------*/
let board;
let winner;
isWinner = false;

// Variables might include (board/turn/winner)


/*------Cached Element References------*/
var squares = document.querySelectorAll('div');
var gameStatus = document.getElementById('message'); 


// You might choose to put your game status here

/*------Event Listeners------*/
document.getElementById('board').addEventListener('click', onClick);
// document.querySelector('section.board').addEventListener('click', onClick);

/*------Functions------*/
initialize();

function onClick(evt) {
  if (isWinner === false) {
  var idx = parseInt(evt.target.id.replace('sq',''));
    if (board[idx] !== 'null') return; 
  setLetter = document.getElementById(`sq${idx}`);
    if (turn === 1) {
      gameStatus.textContent = "X played";
      board[idx] = 1;
    } else {
      gameStatus.textContent = "O played";
      board[idx] = -1;
    }
    //var idx = parseInt(evt.target.id.replace('sq',''));
    //if (board[idx] !== 'null'); 
    
    //return;

    winner = getWinner();
    render(idx); 
    
    //var renderedText = HTMLElement.innerText;
    //HTMLElement.innerText = string;
  } 
  };

  function getWinner() {
      if (board[0] + board[1] + board[2] === 3 || board[3] + board[4] + board[5] === 3 || 
        board[6] + board[7] + board[8] === 3 || board[0] + board[3] + board[6] === 3 || 
        board[1] + board[4] + board[7] === 3 || board[2] + board[5] + board[8] === 3 ||
        board[0] + board[4] + board[8] === 3 || board[2] + board[4] + board[6] === 3) {
          isWinner = true;
          gameStatus.textContent = "YES! X Wins the Game!";
      }
     if (board[0] + board[1] + board[2] === -3 || board[3] + board[4] + board[5] === -3 || 
        board[6] + board[7] + board[8] === -3 || board[0] + board[3] + board[6] === -3 || 
        board[1] + board[4] + board[7] === -3 || board[2] + board[5] + board[8] === -3 ||
        board[0] + board[4] + board[8] === -3 || board[2] + board[4] + board[6] === -3) {
          isWinner = true;
        gameStatus.textContent = "WOHOO! O Wins the Game!";
        
   }
     
      //if (board.includes(null)) return null;
      //return 'draw';
  }
  
  function render(idx) {
 
    
    setLetter = document.getElementById(`sq${idx}`);
    if (turn === 1) {
    setLetter.textContent = "X";
    board[idx] = 1;
    //gameStatus.textContent = "In Play..."
    
  } else {
    setLetter.textContent = "O";
    board[idx] = -1;
    }
    turn *= -1;  
    
    
    //call a function getWinner - inside make win conditions
    //
};

function initialize() {
    board = ['null','null','null','null','null','null','null','null','null'];
    turn = 1;
  //   if board[idx] = ([1, 1, 1]) {
  //     gameStatus.textContent = "X wins";
  //   }
  //  if board[idx] = ([-1, -1, -1]) {
  //  gameStatus.textContent = "O wins";
  //  }
    //winner = null;
    //render();  
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
